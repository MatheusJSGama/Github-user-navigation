import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header
      onClick={() => navigate('/')}
      className='h-74 w-full cursor-pointer bg-[url("/assets/Cover.svg")] bg-cover bg-center bg-no-repeat'
    />
  );
}
