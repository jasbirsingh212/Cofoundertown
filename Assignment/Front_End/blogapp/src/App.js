import './style/app.scss';
import Header from './components/Header';
import {Switch,Route,Redirect} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import NewArtical from'./components/CreatArtical';
import tags from './components/tags';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/SignUp' component={SignUp}></Route>
        <Route path='/SignIn' component={Login}></Route>
        <Route path='/user' component={Profile}></Route>
        <Route path='/publish' component={NewArtical}></Route>
        <Route path='/tag' component={tags}></Route>
      </Switch>
    </div>
  );
}

export default App;
