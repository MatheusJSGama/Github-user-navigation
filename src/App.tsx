import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <UserProvider>
        <Header />
        <Outlet />
      </UserProvider>
    </div>
  );
}

export default App;
