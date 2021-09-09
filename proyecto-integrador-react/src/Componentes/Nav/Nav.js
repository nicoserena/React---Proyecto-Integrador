import React, {Component} from 'react' 

class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

render(){
    return(

        <React.Fragment> 
            <header>
                <h1>Título/ Nombre de la app</h1>
                    <section>
                        <p>Ordenar ASC/ DESC</p>
                        <i class="fas fa-th"></i>
                        <i class="fas fa-align-justify"></i>
                        <form action="">
                            <input type="text" name="search" id="" placeholder="Search">
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </section>
            </header>

        </React.Fragment>
)
} 
}




export default