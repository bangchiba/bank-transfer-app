import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MainLayout } from './components/layout';
import { BankTransfer } from './components/modules/BankTransfer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/" exact component={BankTransfer} />
          {/* <Route path="/detail/:imdbID" component={MovieDetail} /> */}
        </MainLayout>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
