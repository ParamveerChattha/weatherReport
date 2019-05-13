import React from 'react';
import Weather from './Weather.js';

class Form extends React.Component{
    state={
        city: '',
        country: '',
    }
    Change = (e)=>{
        e.preventDefault();
        const target = e.target
        console.log(target.name);
        console.log(target.value);
        this.setState({[target.name]: target.value});
        e.preventDefault();
    }
    onSubmit(event){
    }
    render(){

        Form = ()=>(
  
            <div className="container-fluid text-center">
                <div className="row form-group">
                    
                    <div className="col-xs-5 well">
                    <br/>
                      <label>  <input className="form-control" name="city" placeholder = "city" value={this.city} type="text" on={this.Change.bind(this.value)} /></label>
                    </div>
                    <div className="col-xs-5">
                    <br/>
                  <label>  <input className="form-control"  name="country" placeholder= "country" value={this.country} type ="text" onChange={this.Change.bind(this.value)}/></label>
                    </div>
                    <div className="col-xs-2">
                    <br/>
                    <input className="btn btn-block btn-primary" type="button" id="submit-button" value="submit" onSubmit={this.onSubmit.bind(this)} />
                    </div>
                    
                </div>
            </div>
          
        );
        return(
            <div>
            <Form/>
            <Weather city="Bangalore" country="IN"/>
            </div>
        );
    }
}

export default Form;