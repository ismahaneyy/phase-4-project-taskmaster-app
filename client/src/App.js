import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Loginform from './components/loginform';
import Signup from './components/signupform';
import EmailEntryForm from './components/emailentry';
import TokenEntryForm from './components/tokenentry';
import NewPassWordEntry from './components/newpasswordentry';
import Dashboard from "./components/dashboard";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
           <Loginform/>
        </Route>
        <Route exact path = "/signup">
           <Signup/>
        </Route>
        <Route exact path = "/passwordresetemail">
           <EmailEntryForm/>
        </Route>
        <Route exact path = "/passwordresettoken">
          <TokenEntryForm/>
        </Route>
        <Route exact path = "/passwordresetpassword">
           <NewPassWordEntry/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
