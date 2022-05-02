import React, { Component } from 'react'
import axios from 'axios';

const api=axios.create({
   baseURL:'https://jsonplaceholder.typicode.com/users'
})


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: [],
      userName: [],
      isLoading:true
    }
  }
  loading() {
    return <div>loading..</div>;
  }

  
  componentDidMount(){
    setTimeout(() => {
      console.log('Our data is fetched');
      api.get('/').then(res=>{
        console.log(res.data)
        this.setState({name:res.data})
        this.setState({ isLoading: false })
        ;
      })
    }, 1000)
    
  }
  
  render(){
    return(
      <div>
        {this.state.isLoading ? this.loading(): <ul>
        
        {this.state.name.map(data=>(
        <li key={data.id}>{data.name}-{data.username}</li>))}

        </ul>}
    </div>
    )
  }
}

export default App;
