import React,{ Component } from 'react';
import InfoTable from "./infoTable";
import { toast } from 'react-toastify';
import axios from 'axios';
import InfoForm from './infoForm';

class User extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      data:[]
    }
  }
   create = data =>
        {
         axios.post("http://localhost:8080/Api/addbooks",data).then(res => {
           console.log(res);
         })
        }
  componentDidMount()
  {
     this.getAll();
  }
  getAll()
  {
    axios.get("http://localhost:8080/Api/getAll").then(res => {
      console.log(res.data);
      this.setState({
        data:res.data
      })
        
      })
    
  }
  render()
  {
   return(
    <div className='container mt-3'>
      <div className='row'>
         
           <InfoForm myData ={this.create}/>
         
         
        <InfoTable getData = {this.state.data}/>
      
    </div>
    </div>
   );
  }   
}
export default User;
