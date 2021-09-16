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
                        <h1 className='rkt'>RKT</h1>
                      
                </header>
            </React.Fragment>
        )
    }

}
export default Navbar;