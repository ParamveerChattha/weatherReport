import React from 'react';
import './Form.css';
class Form extends React.Component{

    render(){
        return(
            <div class = "form">
            <form onSubmit={this.props.getWeather} class = "form_elements">
                <input type = "text" name = "city" placeholder="city" />
                <input type = "text" name = "country" placeholder="country"/>
                <button variant="success"> get weather</button>
            </form>
            </div>
        )
    }
}
export default Form;