import React, {Component} from 'react';
import './Tarjetas.css';

class Tarjetas extends Component{
    constructor(props){
        super(props)
        this.state = {
            viewMore: false,
            text:'Ver más'
        }
    
    }

    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'ver menos'
            })            
        }
    }
    render(){
        return(
            <React.Fragment>
                
                <section class="card-container character-card">
                    <article>
                        <section class="navigation">
                            <div>
                                <i class="fas fa-chevron-left"></i>
                                <i class="fas fa-chevron-right"></i>
                            </div>
                            <i class="far fa-window-close" onClick={()=> this.props.borrar(this.props.dataMusica.id)}></i>
                            

                        </section>
                        <main>
                            <img src={this.props.dataMusica.album.cover_medium} alt=""/>
                            <h3>{this.props.dataMusica.title}</h3>
                            <p class="description">Esta es una canción de {this.props.dataMusica.artist.name} </p>
                            <section class="aditional-info">
                                
                            </section>
                            <p className={` ${this.state.viewMore ? 'show' : 'hide'}`}>
                            <p>Album: {this.props.dataMusica.album.title}</p>
                                <p>Esta canción tiene una duración de: {this.props.dataMusica.duration} segundos</p>
                                <p>Se encuentra en el número {this.props.dataMusica.position} de las más escuchadas</p>
                            </p>
                            <button className='mas' onClick={()=>this.viewMore()}>{this.state.text}</button>
                            
                        </main>
                    </article>

                </section>
            </React.Fragment>
        )
    }



}

export default Tarjetas;

