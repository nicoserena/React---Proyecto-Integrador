import React, {Component} from 'react';
import './Nav.css';
import Filtrado from '../Filtrado/Filtrado'

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
                        <h1>Aplicación de musica</h1>
                        <section className='opciones'>
                            <p>Ordenar ASC/ DESC</p>
                            <i className="fas fa-th"></i>
                            <i className="fas fa-align-justify"></i>
                         
                        </section>
                </header>
            </React.Fragment>
        )
    }

}
export default Navbar;