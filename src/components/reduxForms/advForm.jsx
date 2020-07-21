import {Field, Form, reduxForm} from "redux-form";
import React from "react";

const AdvForm = ({handleSubmit, w}) => {
    return <Form onSubmit={handleSubmit}>
        <div className="formItems" >
            <Field placeholder={"Рекламодатель..."} name={"taskName"} component={"input"}/>
        </div>
        <div className="formItems">
            <Field placeholder={"Контактный телефон..."} name={"description"} component={"textarea"}/>
        </div>
        <div className="formItems">
            <Field placeholder={"Контактное лицо..."} name={"description"} component={"textarea"}/>
        </div>
        <div className="formItems">
            <Field placeholder={"E-Mail для отправки счета..."} name={"description"} component={"textarea"}/>
        </div>
        <div className="formItems">
            <Field placeholder={"Реквизиты для выставления счета..."} name={"description"} component={"textarea"}/>
        </div>
        <button>Create Task</button>
    </Form>
};

const AdvReduxForm = reduxForm({
    form: 'task',
    enableReinitialize: true,
})(AdvForm);

export default AdvReduxForm;
