import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import SearchPage from './pages/SearchPage';
import RepoDetailsPage from './pages/RepoDetailsPage';
import RepoList from './components/RepoTable';
import ErrorFOF from './pages/ErrorFOF';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/repos/:repos" exact component={RepoList} />
        <Route path="/repo/:repoId" exact component={RepoDetailsPage} />
        <Route component={ErrorFOF} />
      </Switch>
    </Router>
  );
}

export default App;
