import React,{Component} from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import InputForm from './Components/InputForm/InputForm';
import Output from './Components/Output/Output';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import Footer from './Components/Footer/Footer';
class App extends Component {

  constructor(){
    super();
    this.state ={
      buttonClicked : false,
      input:'',
      ingredValue:'',
      errorMessage:'',
      data:{}
      // api: `https://api.edamam.com/api/nutrition-data?app_id=42b7efdf&app_key=94afc6a161de3c9c0249d8287d3799b7%20&ingr=${this.state.ingredValue}`
    }
  }
  getValue =(event) =>{
    this.setState({
      input : event.target.value
    })
  }
  onSubmit =() =>{    
    this.setState({
      ingredValue : this.state.input
    })
    
    setTimeout( () =>{
      fetch(`https://api.edamam.com/api/nutrition-data?app_id=19a57d35&app_key=10671cfbbcd1606849d370b249f9dd8e&ingr=${this.state.ingredValue}`)
    .then(response => response.json())
    .then(data =>
      { console.log(data);

        this.setState({
          data:data,
          buttonClicked : true
        })
      }
    ).catch(error =>{
      console.log(error)
    })
    
    },10)
    
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
        <InputForm onSubmit ={this.onSubmit} getValue={this.getValue} buttonClicked={this.state.buttonClicked} />
        {(this.state.buttonClicked && this.state.ingredValue !== '') ?
        <Output data={this.state.data}/> 
        :((this.state.buttonClicked && this.state.ingredValue === '')?<ErrorMessage/>: '')}
        
        </div>
        <Footer/>
        
      </div>
    );
  }
  
}

export default App;