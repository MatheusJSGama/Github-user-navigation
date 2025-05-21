import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../../context/userContext';
import { formatedNumber } from '../../../../utils';

export function CardUserInfo() {
  const { userInfos } = useContext(UserContext);
  const data = userInfos.userData;

  return (
    <>
      {userInfos.userData && (
        <main className='mt-4 flex w-full flex-col gap-8 rounded-md bg-base-profile p-6 text-center xxxsm:p-8 xsm:flex xsm:flex-row xsm:text-start'>
          <img
            src={data?.avatar_url}
            alt='Foto de perfil do usuário'
            className='h-37 w-37 self-center rounded-[50%] tablet:rounded-md'
          />
          <div className='flex w-full flex-col justify-between'>
            <div>
              <div className='mt-2 flex items-center justify-between'>
                <span className='text-title-L leading-title-L text-base-title'>
                  {data?.name}
                </span>
                <a
                  href={data?.html_url}
                  target='_blank'
                  className='flex items-center gap-2 text-link leading-0 text-blue'
                >
                  <span className='uppercase'>github</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
              <p className='mt-2 text-base-text'>{data?.bio}</p>
            </div>
            <div className='mt-2 gap-6 xxsm:flex'>
              <div className='flex items-center justify-center gap-2'>
                <FontAwesomeIcon
                  icon={faGithub}
                  className='text-lg text-base-label'
                />
                <span className='text-base-subtitle'>{data?.login}</span>
              </div>

              {data?.company && (
                <div className='flex items-center justify-center gap-2'>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className='text-lg text-base-label'
                  />
                  <span className='text-base-subtitle'>{data.company}</span>
                </div>
              )}

              <div className='flex items-center justify-center gap-2'>
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className='text-lg text-base-label'
                />
                <span className='text-base-subtitle'>
                  {formatedNumber(data?.followers)} seguidores
                </span>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
