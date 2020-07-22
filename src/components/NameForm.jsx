import React from "react";
import axios from 'axios';
import AdvReduxForm from "./reduxForms/advForm";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', typeNum: null};
    }

    render() {
        const onSubmitTask = (formData) => {
            console.log(formData.phoneName)
            console.log(formData.checkBorder)
            console.log(formData.advType)
            console.log(formData.advCat)
            console.log(formData.advText)
            axios.post('http://localhost:4000/form', {
                phone: formData.phoneName,
                checkBorder: formData.checkBorder,
                advType: formData.advType,
                advCat: formData.advCat,
                advText: formData.advText
            })
        };

        const selectType = (val) => {
            this.setState({typeNum: val})
        }

        return (
            <div>
                <AdvReduxForm onSubmit={onSubmitTask} selectType={selectType} typeNum={this.state.typeNum}/>
            </div>
        );
    }
}

export default NameForm;
