import React from "react";
import axios from 'axios';
import AdvReduxForm from "./reduxForms/advForm";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        axios.post('http://localhost:4000/form', {formData: this.state.value})
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {/*<AdvReduxForm/>*/}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Имя:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Отправить"/>
                </form>
            </div>
        );
    }
}

export default NameForm;
