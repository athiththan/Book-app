import React from 'react';


class InfoTable extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div>
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
            
          {
              this.props.getData.length > 0 ?
              (
                  this.props.getData.map(e => 
                    <tr>
                    <td>{e.Name}</td>
                    <td>{}</td>
                    <td>{}</td>
               </tr>
                  )

                  
                 
              )
              :
              (
                  <tr>
                      <td>No Data</td>
                      </tr>
              )
          }
          
       </tbody>
      </table>
      </div>

    )
 } 
}
export default InfoTable;