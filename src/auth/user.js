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
      data:[],
      editData:[]
    }
  }
   create = data =>
        {
         axios.post("http://localhost:8080/Api/addbooks",data).then(res => {
           console.log(res);
           this.getAll()
         })
        }
  componentDidMount()
  {
     this.getAll();
  }
  getAll()
  {
    axios.get("http://localhost:8080/api/getAll").then(res => {
      console.log(res.data);
      this.setState({
        data:res.data
      })
        
      })
  }

  delete = data =>
   {
    var option = window.confirm('Are You Sure Want to Delete')
    if(option){
      axios.delete(`http://localhost:8080/api/delete/${data.id}`).then(res => {
      console.log(res);
      this.getAll()
        
      })
    }
  }
  update = data =>
  {
     console.log(data);
     this.setState({
       editData:data
     })
  }
  
  render()
  {
   return(
    <div className='container mt-3'>
      <div className='row'>
         
           <InfoForm myData ={this.create} setForm ={ this.editData}/>
         
         
        <InfoTable getData = {this.state.data} delete={this.delete}  setData={this.update}/>
      
    </div>
    </div>
   );
  }   
}
export default User;
