import React, {Component} from 'react';
import Tarjetas from '../Tarjetas/Tarjetas';
import Filtrado from '../Filtrado/Filtrado';
import './musica.css';

class Musica extends Component{
    constructor(){
        super();
        this.state = {
            musica:[],
            cancionesIniciales:[],
            valor: 12,
            flex: 'musica-r',
            
        }
    }
    componentDidMount(){

        console.log("se cargo el comp");
        let proxy = "https://thingproxy.freeboard.io/fetch/";
        let url = proxy +'https://api.deezer.com/chart/0/tracks&top?limit=' + this.state.valor 
        
        
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

        masCanciones(){
            let url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=" + this.state.valor
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((datos)=>{
                this.setState({
                    musica: datos.data,
                    valor: this.state.valor + 12
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
        
        filtrarCanciones(cancionAFiltrar){
            let cancionesFiltradas = this.state.cancionesIniciales.filter(musica =>{
                return musica.title.toLowerCase().includes(cancionAFiltrar.toLowerCase()) 
            } )
            this.setState({
                musica : cancionesFiltradas
            })
        }
        cambiarOrientacion(orientacion){
                this.setState({
                    flex: orientacion
                })              
        }
    
        render(){
            return(

                <React.Fragment>
                  <div className='subheader'>
                    <Filtrado filtrarCanciones = { (cancion) => this.filtrarCanciones(cancion) } />
                    <section className='opciones'>
                
                            <i className="fas fa-th" onClick= { ()=> this.cambiarOrientacion('musica-r')}></i>
                            <i className="fas fa-align-justify" onClick= { ()=> this.cambiarOrientacion('musica-c')}></i>
                   
                        </section>
                </div> 
                <div className={` ${this.state.flex} card-conteiner`}>                
                    {   
                        this.state.musica.length === 0 ?
                        <p>Cargando canciones...</p> :
                        this.state.musica.map((musica, index)=><Tarjetas key={musica + index} dataMusica={musica}
                        borrar = {(idEliminar) => this.borrarTarjeta(idEliminar)} />) 
                    }
                    
                </div>
            
                <button className='but' onClick={() => this.masCanciones()} >Más canciones</button>
 
            </React.Fragment>



            )
        
        }
}

export default Musica;


