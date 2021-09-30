import React from "react";



class InfoForm extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            BookName: "",
            AutherName: "",
            Price: ""
        };
    }
    infoChange = event =>
    {
        const { name,value } = event.target;
        this.setState({
            [name]: value
        })    
    }
    infoSubmit = event =>
{ 
    event.preventDefault();
    let data = {
        BookName:this.state.BookName,
        AutherName:this.state.AutherName,
        Price:this.state.Price
    }
    this.props.myData(data)
    
}

    render()
    {
        return(
            <form onSubmit= {this.infoSubmit} autoComplete='off'>
                <div className='form-group'>
                    <lable>BookName</lable>
                    <input type='text' className='form-control' placeholder='enter the bookname'
                    onChange={this.infoChange}
                    name='BookName'
                    value={this.state.BookName}/>
                </div>
                <div className='form-group'>
                    <label>AutherName</label>
                    <input type='text' className='form-control' placeholder='enter authername'
                    onChange={this.infoChange}
                    name='AutherName'
                    value={this.state.AutherName}/>
                </div>
                <div className='form-group'>
                    <label>Price</label>
                    <input type='text' className='form-control' placeholder='price'
                    onChange={this.infoChange}
                    name='Price'
                    value={this.state.Price}/>
                </div>
             <button className='btn btn-primary mt-3'>Submit</button>
            </form>





        )
    }
}
export default InfoForm;