import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Erro extends Component{
  
  constructor(props){
    super(props);
    this.state = {};
  }
  
  
  render(){
    return(
      <div>
          <h2>
        Ops pagina não encontrada
        <hr/>
        

        </h2>
        <h3>
            <Link to= "/">Home</Link> <br/>
            <Link to="/sobre">Ir para sobre</Link>        
        </h3>
      </div>

    );
  }

}


export default Erro;
