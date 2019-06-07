import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductList from '../Product/index'
import Login from '../Login/index';
import Home from '../Home/index'

class Menu extends React.Component {

  render(){
    
    return (
      <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/productList/">Produtos</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Login} />
        <Route path="/home/" component={Home} />
        <Route path="/productList/" component={ProductList} />
      </div>
    </Router>
      );
  }

}

export default Menu;
