import React, {Component} from 'react';

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
        }, () => this.props.filtrarPersonajes(this.state.filtrarPor))
    }
    render(){
        return(
            <React.Fragment>
                <form onSubmit = {(e) => this.evitarEnviar(e) }>
                    <label for='nombre'>Personajes a filtrar..:</label>
                    <input  type='text' name='nombre'  id='nombre' onChange= {(e) => this.controlarCambios(e) } value={this.state.filtrarPor } />
                </form>
            </React.Fragment>
        )
    }

}
export default Filtrado;