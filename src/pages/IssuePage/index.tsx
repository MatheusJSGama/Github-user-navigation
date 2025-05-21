import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { UserContext } from '../../context/userContext';
import { formatDistanceToNowStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import rehypeRaw from 'rehype-raw'

export function Issue() {
  const { userInfos } = useContext(UserContext);
  const issueData = userInfos.currentIssue;
  const navigate = useNavigate();

  return (
    <main className='w-full max-w-[55rem] p-4'>
      {issueData && (
        <>
          <div className='-mt-24 flex w-full flex-col gap-5 rounded-md bg-base-profile p-8'>
            <div className='flex justify-between text-link text-blue uppercase'>
              <button
                onClick={() => navigate(-1)}
                className='flex cursor-pointer items-center gap-2'
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Voltar</span>
              </button>
              <a
                href={issueData?.html_url}
                target='_blank'
                className='flex items-center gap-2'
              >
                <span>Ver no github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-title-L text-base-title'>
                {issueData?.title}
              </span>
              <div className='flex flex-col items-center gap-4 xxxsm:flex-row'>
                <div className='flex items-center gap-1'>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className='text-base-label'
                  />
                  <span className='text-base-span'>
                    {issueData?.user.login}
                  </span>
                </div>

                <div className='flex items-center gap-1'>
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className='text-base-label'
                  />
                  <span className='text-base-span'>
                    {issueData?.created_at
                      ? formatDistanceToNowStrict(issueData.created_at, {
                          locale: ptBR,
                        })
                      : 'Data desconhecida'}
                  </span>
                </div>

                <div className='flex items-center gap-1'>
                  <FontAwesomeIcon
                    icon={faComment}
                    className='text-base-label'
                  />
                  <span className='text-base-span'>
                    {issueData?.comments} comentários
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='text-M text-base-text px-8 py-10'>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{issueData?.body}</ReactMarkdown>
          </div>
        </>
      )}
    </main>
  );
}
