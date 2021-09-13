import React, {Component} from 'react';
import Tarjetas from '../Tarjetas/Tarjetas';
import Filtrado from '../Filtrado/Filtrado'
import './musica.css'

class Musica extends Component{
    constructor(){
        super();
        this.state = {
            musica:[],
            cancionesIniciales:[],
        }
    }
    componentDidMount(){

        console.log("se cargo el comp");
        let proxy = "https://thingproxy.freeboard.io/fetch/";
        let url = proxy +'https://api.deezer.com/chart/0/tracks&top?limit=12' 
        
        
    fetch(url)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then((datos) => { 
            this.setState({
                musica: datos.data,
                cancionesIniciales: datos.data
            })
        })

        }

        masPersonajes(){
            let url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=12"
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((datos)=>{
                this.setState({
                    musica: this.state.musica.concat(datos.data),
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
        
        filtrarPersonajes(textoAFiltrar){
            let cancionesFiltradas = this.state.cancionesIniciales.filter(musica =>{
                return musica.title.toLowerCase().includes(textoAFiltrar.toLowerCase()) 
            } )
            this.setState({
                musica : cancionesFiltradas
            })
        }

        render(){
            return(

                <React.Fragment>
                  <div>
                    <Filtrado filtrarPersonajes = { (texto) => this.filtrarPersonajes(texto) } />
                </div> 
                <div className="musica card-conteiner">                
                    {   //this.state.personajes.length === 0 ?
                        //<Loader></Loader> :
                        console.log(this.state.musica),
                        this.state.musica.map((musica, index)=><Tarjetas key={musica + index} dataMusica={musica}
                        borrar = {(idEliminar) => this.borrarTarjeta(idEliminar)} />) 
                    }
                </div>
                <button onClick={() => this.masPersonajes()} >Más personajes</button>
 
            </React.Fragment>



            )
        
        }
}

export default Musica


