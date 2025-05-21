import { CardUserInfo } from './components/CardUserInfo';
import { SearchUser } from './components/SearchUser';
import { CardRepo } from './components/CardrRepo';

export function Home() {
  return (
    <div className='flex w-full max-w-[55rem] flex-col items-center p-4'>
      <SearchUser />
      <CardUserInfo />
      <div className='flex w-full flex-wrap justify-between'>
        <CardRepo />
      </div>
    </div>
  );
}
