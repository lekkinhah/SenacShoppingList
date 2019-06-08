import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Menu.css'
import ProductList from '../Product/index'
import Login from '../Login/index';
import Home from '../Home/index'

class Menu extends React.Component {

  render(){
    
    return (
      <Router>
      <div id='teste'>
        <nav id='menu'>
            <Link to="/">Login</Link>
            <Link to="/home">Home</Link>
            <Link to="/productList/">Produtos</Link>
        </nav>
        </div>
        <Route path="/" exact component={Login} />
        <Route path="/home/" component={Home} />
        <Route path="/productList/" component={ProductList} />
      
    </Router>
      );
  }

}

export default Menu;
