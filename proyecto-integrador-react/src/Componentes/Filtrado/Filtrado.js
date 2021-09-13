import React, {Component} from 'react';
import './Filtrado.css'

class Filtrado extends Component{
    constructor(props){
        super(props)
        this.state ={
            filtrarPor : ''
        }
    }
    //Aquí debemos crear el método que evite enviar el formulario
    evitarEnviar(evento){
        evento.preventDefault()
    }
    //Aquí creamos el método para controlar los cambios en el formulario
    controlarCambios(evento){
        this.setState({
            filtrarPor : evento.target.value
        }, () => this.props.filtrarCanciones(this.state.filtrarPor))
    }
    render(){
        return(
            <React.Fragment>
                <form className='a' onSubmit = {(e) => this.evitarEnviar(e) }>
                    <label for='nombre'>Canciones a filtrar:</label>
                    <input  type='text' name='nombre'  id='nombre' onChange= {(e) => this.controlarCambios(e) } value={this.state.filtrarPor } />
                </form>
            </React.Fragment>
        )
    }

}
export default Filtrado;