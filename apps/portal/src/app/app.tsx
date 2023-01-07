import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Navbar } from '@3env/shared/ui';
import NxWelcome from './nx-welcome';

const AssetOperations = React.lazy(() => import('sqp/Module'));

const ProjectDevelopment = React.lazy(() => import('sqdv/Module'));

const APP_ROUTES = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Asset Operations',
    route: '/sqp',
  },
  {
    name: 'Project Development',
    route: '/sqdv',
  },
];

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Navbar routes={APP_ROUTES} />
      <Routes>
        <Route path="/" element={<NxWelcome title="Main Portal" />} />
        <Route path="/sqp/*" element={<AssetOperations />} />
        <Route path="/sqdv/*" element={<ProjectDevelopment />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
