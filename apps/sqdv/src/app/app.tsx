// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Route, Routes } from 'react-router-dom';

function TestSubRoute() {
  return <div>subRoute</div>;
}
export function App() {
  return (
    <Routes>
      <Route index element={<NxWelcome title="Project Development" />} />
      <Route path="/test" element={<TestSubRoute />} />
    </Routes>
  );
}

export default App;
