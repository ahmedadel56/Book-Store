import '../components-style/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Books from './Books';
import Categories from './Categories';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
