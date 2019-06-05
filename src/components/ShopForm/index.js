import React from 'react';


class ShopForm extends React.Component{

    state={
        productCategory:[],
        newProduct:'',
    };
   

    handleSubmit = (event) => {
        event.preventDefault();
        
        if(this.props.onSubmit){
            const item= {
                name: this.state.newProduct,
                category: this.state.selected
            };
            this.props.onSubmit(item);
        }
            

        this.setState({newProduct:''});
    };

    handleChange = (event) => {
        this.setState({newProduct: event.target.value});
    };

    handleOptionChange =(event) => {
        this.setState({selected:event.target.value});
    };

    componentDidMount(){
        this.setState({
            productCategory:[
                {id: '01', name: 'categoria1'},
                {id: '02', name: 'categoria2'},
                {id: '03', name: 'categoria3'}
            ]
        });
    };

    render(){

        const productCategory = this.state.productCategory;

        return(
            
                <form onSubmit={this.handleSubmit} >
                    <label>Produto</label>
                    <input type="text" id="newProduct" value={this.newProduct} onChange={this.handleChange}></input>
                    <select onChange={this.handleOptionChange}>
                       <option>Selecione</option>
                       {productCategory.map((category) => <option key={category.id} value={category.id} >{category.name}</option>)}
                    </select>
                    <button>Add</button>
                </form>
           
        );
    };
}

export default ShopForm;