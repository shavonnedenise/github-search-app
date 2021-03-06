import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Grid from '@material-ui/core/Grid';

import SearchPage from './pages/SearchPage';
import RepoDetailsPage from './pages/RepoDetailsPage';
import RepoList from './components/RepoTable';
import ErrorFOF from './pages/ErrorFOF';

function App() {
  return (
    <Grid>
      <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/repos/:repos" exact component={RepoList} />
        <Route path="/repo/:repoId" exact component={RepoDetailsPage} />
        <Route component={ErrorFOF} />
      </Switch>
    </Router>
    </Grid>
  );
}

export default App;
