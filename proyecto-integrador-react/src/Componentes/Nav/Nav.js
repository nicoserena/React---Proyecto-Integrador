import React, {Component} from 'react';
import './Nav.css';

class Navbar extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return(
            <React.Fragment>
                <header className='encabezado bg-success text-white p-2 '>
                        <h1>RKT</h1>
                        <section className='opciones'>
                            <i className="fas fa-th"></i>
                            <i className="fas fa-align-justify"></i>
                         
                        </section>
                </header>
            </React.Fragment>
        )
    }

}
export default Navbar;