import React from 'react';

class User extends React.Component
{
  constructor(props)
  {
     super(props);
    // this.setState = {
    //   BookName:"",
    //   Authername:"",
    //   price:""
  //   }
  // }
  // infoChange = event=>
  // {
  //   const { name,value } = event.target;
  //   this.setState({
  //     [name] : value
  //   })
  // }
  // infoEdit = event =>
  // {
  //   console.log(this.state.BookName);
  }
  render(){
  return(
    <>
    <form onEdit = {this.infoEdit}>
    
      <label for="Book Name"> Book Name</label>
      <input type="text" className="form-control" placeholder="Enter Book Name" 
        //onChange ={this.infoChange} name="BookName" value={this.state.BookName}
        />
    
    <label for="Auther Name"> Auther Name</label>
      <input type="text" className="form-control" placeholder="Enter Auther Name" 
       //onChange ={this.infoChange} name="AutherName" value={this.state.AutherName}
       />
        <label for="Book Price"> Book Price</label>
      <input type="text" className="form-control" placeholder="Enter Book Price" 
       //onChange ={this.infoChange} name="BookPrice" value={this.state.price}
       />
    
    <button type="button" className="btn btn-primary mt-3" >Add</button>
  </form>


  <table className="table">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Book List</th>
      <th>Auther Name</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>dir</td>
      <td>dir</td>
      <td><button onClick = {this.infoChange}
      className = "btn btn-primary">Edit</button></td>
      <td><button className="btn btn-secondary">Remove</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Moe</td>
      <td>dir</td>
      <td><button className="btn btn-primary">Edit</button></td>
      <td><button className="btn btn-secondary">Remove</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Dooley</td>
      <td>dir</td>
      <td><button className="btn btn-primary">Edit</button></td>
      <td><button className="btn btn-secondary">Remove</button></td>
    </tr>
  </tbody>
</table>


     //<button onClick = {()=>{
       //localStorage.clear();
      // props.history.push('/login')
     }} className = "btn btn-primary"> logout</button>
     </>
   ) 
 }
}
export default User;