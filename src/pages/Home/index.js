import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component{
  
  constructor(props){
    super(props);
    this.state = {};
  }
  
  
  render(){
    return(
      <div>
          <h2>
        Home
        <hr/>
        

        </h2>
        
        <Link to="/sobre">Ir para sobre</Link>
      </div>

    );
  }

}


export default Home;
