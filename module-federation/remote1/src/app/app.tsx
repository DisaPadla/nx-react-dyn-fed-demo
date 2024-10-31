// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.css';
import { Link, Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';

const Remote2 = React.lazy(() => import('remote2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div>
        <li>
            <Link to="/remote2">Nested Remote2</Link>
          </li>
        <NxWelcome title="remote1" />
        <Routes>
          <Route path="/" element={<NxWelcome title="host" />} />


          <Route path="/remote2" element={<Remote2 />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
