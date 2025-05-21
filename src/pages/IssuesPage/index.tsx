import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { IssueCard } from './components/issueCard';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

export function IssuesPage() {
  const { userInfos } = useContext(UserContext);
  const issuesData = userInfos.userRepoIssues;

  return (
    <div className='-mt-24 flex w-full max-w-[55rem] flex-col items-center gap-4 p-4'>
      <div className='flex w-full max-w-[54rem] flex-col items-center justify-start gap-3'>
        <Link
          to={'/'}
          className='flex w-full items-center gap-2 text-link font-bold text-blue'
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Voltar</span>
        </Link>
        <div className='flex w-full justify-between'>
          <span className='text-title-S text-base-subtitle'>Publicações</span>
          <span className='text-S text-base-span'>
            {issuesData?.length} publicações
          </span>
        </div>
      </div>
      <ul
        className={clsx('mt-4 grid w-full gap-4 tablet:grid-cols-2', {
          'tablet:grid-cols-none': issuesData?.length === 1,
        })}
      >
        {issuesData?.map((issue) => {
          return (
            <IssueCard
              key={issue.id}
              title={issue.title}
              body={issue.body}
              updated_at={issue.updated_at}
              issueNumber={issue.number}
            />
          );
        })}
      </ul>
    </div>
  );
}
