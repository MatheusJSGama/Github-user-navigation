import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeFork,
  faEye,
  faArrowUpRightFromSquare,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../../context/userContext';
import { formatDistanceToNowStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { formatedNumber } from '../../../../utils/index';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

export function CardRepo() {
  const { userInfos, fetchRepoIssues } = useContext(UserContext);
  const repos = userInfos.userRepos;
  const navigate = useNavigate();

  return (
    <>
      {userInfos.userRepos && (
        <ul className='mt-4 grid w-full gap-4 tablet:grid-cols-2'>
          {repos?.map((repo) => {
            const createDateRelativeFromNow = formatDistanceToNowStrict(
              repo.updated_at,
              {
                locale: ptBR,
              },
            );

            return (
              <li
                onClick={() => {
                  fetchRepoIssues({
                    owner: repo.owner.login,
                    repoName: repo.name,
                  });

                  if (repo.open_issues) {
                    navigate(`/${repo.owner.login}/${repo.name}/issues`, {
                      state: {
                        repoData: {
                          owner: repo.owner.login,
                          name: repo.name,
                        },
                      },
                    });
                  }
                }}
                key={repo.id}
                className={clsx(
                  'flex flex-col gap-2 rounded-md border-transparent bg-base-profile p-6 duration-300',
                  {
                    'cursor-pointer border border-solid hover:border-blue':
                      repo.open_issues > 0,
                  },
                )}
              >
                <div className='flex items-start justify-between'>
                  <span className='max-w-[13rem] text-title-L leading-title-L text-base-title'>
                    {repo.name}
                  </span>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    className='flex items-center gap-2 text-link leading-0 text-blue'
                  >
                    Repo
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>

                <div className='flex gap-3'>
                  {repo.language && (
                    <p className='font-bold text-base-label'>
                      Linguagem:
                      <span className='text-base-text'> {repo.language} </span>
                    </p>
                  )}

                  <p className='font-bold text-base-label'>
                    Issues:
                    <span className='text-base-text'> {repo.open_issues} </span>
                  </p>
                </div>

                <div className='flex flex-col justify-between xxxsm:flex-row'>
                  <div className='flex gap-4'>
                    <span className='flex items-center gap-2'>
                      <FontAwesomeIcon
                        icon={faEye}
                        className='mb-0.5 text-lg text-base-label'
                      />
                      {formatedNumber(repo.watchers)}
                    </span>

                    <span className='flex items-center gap-2'>
                      <FontAwesomeIcon
                        icon={faCodeFork}
                        className='text-lg text-base-label'
                      />
                      {formatedNumber(repo.forks)}
                    </span>

                    <span className='flex items-center gap-2'>
                      <FontAwesomeIcon
                        icon={faStar}
                        className='mb-0.5 text-lg text-base-label'
                      />
                      {formatedNumber(repo.stargazers_count)}
                    </span>
                  </div>
                  <span className='mt-1'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faRotateRight}
                      className='text-lg text-base-label'
                    />{' '}
                    {createDateRelativeFromNow}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
