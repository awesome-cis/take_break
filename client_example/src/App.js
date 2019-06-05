import React from 'react';
import { Link, Route } from 'react-router-dom';

import AuthGithub from './components/AuthGithub';
import AuthGithubCallback from './components/AuthGithubCallback';

function App() {
  return (
    <div className="App">
      <nav className="App__nav">
        <ul>
          <li>
            <Link to="/auth/github">Github</Link>
          </li>
        </ul>
      </nav>
      <section className="App__contents">
        <Route path="/auth/github" component={AuthGithub} exact />
        <Route
          path="/auth/github/callback"
          component={AuthGithubCallback}
          exact
        />
      </section>
    </div>
  );
}

export default App;
