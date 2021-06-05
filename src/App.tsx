import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MainLayout } from './components/layout';
import { Transaction, TransactionDetail } from './components/modules/Transaction';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/" exact component={Transaction} />
          <Route path="/detail" component={TransactionDetail} />
        </MainLayout>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
