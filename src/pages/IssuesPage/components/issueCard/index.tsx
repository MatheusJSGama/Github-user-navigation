import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDistanceToNowStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../context/userContext';

interface IsssueCardProps {
  title: string;
  updated_at: string;
  body: string;
  issueNumber: number;
}

export function IssueCard(data: IsssueCardProps) {
  const { fetchSingleIssue } = useContext(UserContext);

  const issueUpdateRelativeFromNow = formatDistanceToNowStrict(
    data.updated_at,
    {
      locale: ptBR,
    },
  );

  const location = useLocation();
  const repoData = location.state?.repoData;

  const cardContent = (
    <li
      onClick={() => {
        if (data.body !== null) {
          fetchSingleIssue({
            owner: repoData.owner,
            repoName: repoData.name,
            issueNumber: data.issueNumber,
          });
        }
      }}
    >
      <div className="flex items-baseline justify-between">
        <span className="max-w-[11rem] text-title-M text-base-title xxxsm:max-w-[13rem]">
          {data.title}
        </span>
        <span className="flex items-center gap-1 text-S text-base-span">
          <FontAwesomeIcon icon={faRotateRight} />
          {issueUpdateRelativeFromNow}
        </span>
      </div>
      {data.body !== null ? (
        <span className="line-clamp-4 text-M text-base-text">{data.body}</span>
      ) : (
        <span className="line-clamp-4 text-M text-red-500">
          Issue sem texto
        </span>
      )}
    </li>
  );

  if (data.body !== null) {
    return (
      <Link
        to={`/${repoData.owner}/${repoData.name}/issues/${data.title}`}
        className="flex flex-col gap-5 overflow-hidden rounded-md border border-solid border-transparent bg-base-post p-6 hover:border-blue"
      >
        {cardContent}
      </Link>
    );
  } else {
    return (
      <div className="flex flex-col gap-5 overflow-hidden rounded-md border-transparent bg-base-post p-6">
        {cardContent}
      </div>
    );
  }
}
