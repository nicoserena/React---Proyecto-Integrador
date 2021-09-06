import React, {Component} from 'react';

class Musica extends Component{
    constructor(){
        super();
        this.state = {
            musica:[],
            
        }
    }
    componentDidMount(){

        console.log("se cargo el comp");
        let proxy = "https://cors-anywhere.herokuapp.com/";
        let url = proxy +'https://api.deezer.com/chart/0/tracks' 
        
        
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
    render(){
        return(
            <React.Fragment>
               {console.log(this.state.musica)} 

            </React.Fragment>
        )
    }
}

export default Musica


