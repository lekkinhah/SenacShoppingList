import React, {Fragment} from 'react';
import './App.css';
import ShopList from './components/ShopList';
import ShopForm from './components/ShopForm';

class App extends React.Component {

  state={
    products:[],
  }

handleFormSubmit = (result) => {
  this.setState({products: [...this.state.products, result]});  
};

onDelete = (item) => {
  console.log(item);
  this.setState({products:[...this.state.products.filter(i => i !== item)]});
};

  render(){
    
    return (
      <Fragment>
        <ShopForm onSubmit={this.handleFormSubmit}></ShopForm>
        <ShopList products={this.state.products} onDelete={this.onDelete}></ShopList>
       </Fragment>
      );
  }

}

export default App;
