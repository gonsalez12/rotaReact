import React, { Component} from 'react'


class Produto extends Component{
  
  constructor(props){
    super(props);
    this.state = {
        id:''
    };
  }
  
  componentDidMount(){
      const {id} =this.props.match.params;
      this.setState({id : id});
  }
  
  render(){
    return(
      <div>
          <h2>
            Produto {this.state.id}
        </h2>
      </div>

    );
  }

}


export default Produto;
