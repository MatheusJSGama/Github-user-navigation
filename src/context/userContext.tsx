import { createContext, ReactNode, useState } from 'react';
import { api } from '../lib/axios';
import toast from 'react-hot-toast';

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProviderProps {
  fetchUserData: (data: FetchUserProps) => Promise<void>;
  fetchRepoIssues: (data: FetchRepoIssuesProps) => Promise<void>;
  fetchSingleIssue: (data: FetchIssueData) => Promise<void>;
  userInfos: UserInfos;
}

interface FetchUserProps {
  userName: string;
}

interface FetchRepoIssuesProps {
  owner: string;
  repoName: string;
}

interface FetchIssueData {
  owner: string;
  repoName: string;
  issueNumber: string | number;
}

interface UserInfos {
  userData: GitHubUserData | null;
  userRepos: GitHubUserRepos[] | null;
  userRepoIssues: GitHubRepoIssues[] | null;
  currentIssue: GitHubRepoIssues | null;
}

interface GitHubUserData {
  name: string;
  avatar_url: string;
  bio: string;
  company: string | null;
  html_url: string;
  login: string;
  followers: number;
}

interface GitHubUserRepos {
  name: string;
  html_url: string;
  open_issues: number;
  updated_at: string;
  forks: number;
  watchers: number;
  stargazers_count: number;
  language: string;
  id: number;
  owner: {
    login: string;
  };
}

interface GitHubRepoIssues {
  body: string;
  title: string;
  updated_at: string;
  created_at: string;
  id: number;
  number: number;
  comments: number;
  html_url: string;
  user: {
    login: string;
  };
}

export const UserContext = createContext({} as UserContextProviderProps);

export function UserProvider({ children }: UserProviderProps) {
  const [userInfos, setUserInfos] = useState({
    userData: null,
    userRepos: null,
    userRepoIssues: null,
    currentIssue: null,
  });

  async function fetchUserData(data: FetchUserProps) {
    try {
      const responseUserProfileInfos = await api.get(data.userName);
      const responseUserReposInfos = await api.get(`${data.userName}/repos`);
      console.log(responseUserProfileInfos);
      
      setUserInfos({
        userData: responseUserProfileInfos.data,
        userRepos: responseUserReposInfos.data,
        userRepoIssues: null,
        currentIssue: null,
      });
    } catch (error: any) {
      const status = error.response.status;
      switch (status) {
        case 404:
          toast.error('Usuário não encontrado, tente novamente.');
          break;

        case 403:
          toast.error(
            'Limite de requisições excedido. Tente novamente mais tarde',
          );
          break;

        default:
          toast.error('Erro inesperado ao buscar dados');
      }
    }
  }

  async function fetchRepoIssues(data: FetchRepoIssuesProps) {
    setUserInfos((state) => ({
      ...state,
      userRepoIssues: null,
    }));

    const responseissues = await api.get(
      `https://api.github.com/repos/${data.owner}/${data.repoName}/issues`,
    );
    console.log(responseissues);

    setUserInfos((state) => ({
      ...state,
      userRepoIssues: responseissues.data,
    }));
  }

  async function fetchSingleIssue(data: FetchIssueData) {
    setUserInfos((state) => ({
      ...state,
      currentIssue: null,
    }));

    const responseIssue = await api.get(
      `https://api.github.com/repos/${data.owner}/${data.repoName}/issues/${data.issueNumber}`,
    );

    setUserInfos((state) => ({
      ...state,
      currentIssue: responseIssue.data,
    }));
  }

  return (
    <UserContext.Provider
      value={{ fetchUserData, userInfos, fetchRepoIssues, fetchSingleIssue }}
    >
      {children}
    </UserContext.Provider>
  );
}
