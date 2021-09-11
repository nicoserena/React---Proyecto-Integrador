import React, {Component} from 'react';
import Tarjetas from '../Tarjetas/Tarjetas';

class Musica extends Component{
    constructor(){
        super();
        this.state = {
            musica:[],
            
        }
    }
    componentDidMount(){

        console.log("se cargo el comp");
        let proxy = "https://thingproxy.freeboard.io/fetch/";
        let url = proxy +'https://api.deezer.com/chart/0/tracks&top?limit=10' 
        
        
    fetch(url)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then((datos) => { 
            this.setState({
                musica: datos.data
            })
        })

        }


        borrarTarjeta(id){
            let cancionesQuedan = this.state.musica.filter(musica =>{
                return musica.id !== id
            })
            this.setState({
                musica: cancionesQuedan
            })
        }
        
        render(){
            return(

                <React.Fragment>
                <div className="musica card-conteiner">                
                    {   this.state.personajes.length === 0 ?
                        <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner> :
                        console.log(this.state.musica),
                        this.state.musica.map((musica, index)=><Tarjetas key={musica + index} dataMusica={musica}
                        borrar = {(idEliminar) => this.borrarTarjeta(idEliminar)} />) 
                    }
                </div>
                
            </React.Fragment>



            )
        
        }
}

export default Musica


