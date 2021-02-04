import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import image from './image1.png'
import React from "react";
class Elements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {size: 0}
        this.addToCart = this.addToCart.bind(this);
    }
    elements = [
        {id: 1, name: 'Element 1'},
        {id: 2, name: 'Element 2'},
        {id: 3, name: 'Element 3'},
        {id: 4, name: 'Element 4'},
        {id: 5, name: 'Element 5'},
        {id: 6, name: 'Element 6'}
    ];
    cart = [];

    renderElements = this.elements.map(e => (
        <div className='card px-0 w-33 mb-3' key={e.id}>
            <img src={image} width='130' height='140' alt='' className='card-img-top'/>
            <div className='card-body'>
                <div className='row'>
                    <label className='col'>{e.name}</label>
                    <span className='dots col-1 me-2'></span>
                </div>
                <button onClick={()=>this.addToCart(e)} className='text-success btn btn-link text-decoration-none'
                        id={'btn' + e.id}>
                    + ADD to Cart
                </button>
            </div>
        </div>
    ));

    addToCart(element){
        this.cart.push(element);
        this.setState({size: this.cart.length});
        document.getElementById('btn'+element.id).innerText = 'Added to Cart';
        document.getElementById('add').className='alert alert-success';
    }
    closeAlert(){
        document.getElementById('add').className='d-none';
    }

    render() {
            return (
                <div>
                    <div className="d-none" id='add'>
                        Element was added to cart successfully
                        <button type="button" className="btn close float-end" onClick={()=>this.closeAlert()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <ul className="row row-cols-3 justify-content-evenly">
                    {this.renderElements}</ul>
                </div>
            )
    }
}
export default Elements;

