import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages/Home';
import { IssuesPage } from '../pages/IssuesPage';
import { Issue } from '../pages/IssuePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/:owner/:repoName/issues', element: <IssuesPage /> },
      { path: '/:owner/:repoName/issues/:issueTitle', element: <Issue /> },
    ],
  },
]);
