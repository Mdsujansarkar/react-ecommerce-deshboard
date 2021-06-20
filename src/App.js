
import './App.css';
// import {Button} from 'react-bootstrap';
// import { BrowserRouter, Route} from 'react-Router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';

import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Register from './components/Register';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Ecoomerce Deshboard</h1>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/add">
          <AddProduct />
        </Route>
        
        <Route path="/register">

          <Register />
        </Route>
        <Route path="/updated">
          <UpdateProduct />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
