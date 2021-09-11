import React, {Component} from 'react';
<<<<<<< HEAD
//import Loader from 'react-loader-spinner';
=======
/*import Loader from 'react-loader-spinner';*/
>>>>>>> d5c541418509614c13f4b2380b1e48899c1c1218
import Tarjetas from '../Tarjetas/Tarjetas';
import Filtrado from '../Filtrado/Filtrado'

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
        let url = proxy +'https://api.deezer.com/chart/0/tracks&top?limit=10' 
        
        
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
                
            </React.Fragment>



            )
        
        }
}

export default Musica


