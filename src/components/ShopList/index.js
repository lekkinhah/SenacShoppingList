import React from 'react';

class ShopList extends React.Component {

  
  render(){
    
    const {products, onDelete} = this.props;

    return (
      <div>{products.map((product, index)=>
            <div key={index}>{product.name} - {product.category} 
            <span onClick={()=> onDelete ? onDelete(product) : {} }> Excluir </span></div>)}
       </div>
       
      );
  }

}

export default ShopList;