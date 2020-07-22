import {Field, Form, reduxForm} from "redux-form";
import React, {useState} from "react";

const adv = [
    {
        id: 0,
        data: "Недвижимость",
        optData: [{id: 0, txt: "Продаю"}, {id: 1, txt: "Куплю"}, {id: 2, txt: "Сдаю"}, {id: 3, txt: "Меняю"}]
    },
    {
        id: 1,
        data: "Авторынок",
        optData: [{id: 0, txt: "Продаю"}, {id: 1, txt: "Автозапчасти"}, {id: 2, txt: "Куплю"}]
    },
    {
        id: 2,
        data: "Всякая всячина",
        optData: [{id: 0, txt: "Продаю"}, {id: 1, txt: "Куплю"}]
    },
    {
        id: 3,
        data: "Услуги"
    },
    {id: 4, data: "Работа", optData: [{id: 0, txt: "Требуются"}, {id: 1, txt: "Ищу работу"}]},
    {id: 5, data: "Животные"},
    {id: 6, data: "Разное"},
    {id: 7, data: "Приму в дар"}
];

// let selectedType = (event) => {
//     console.log(event.target.value)
//     setTypeNum(event.target.value)
// }


const AdvForm = ({handleSubmit, selectType, typeNum}) => {
    return <Form onSubmit={handleSubmit}>
        <div className="formItems">
            <Field placeholder={"Контактный телефон..."} name={"phoneName"} type={"phone"} component={"input"}/>
        </div>
        <div className="formItems">
            <label htmlFor="">в рамке</label>
            <Field placeholder={"dfdfн..."} name={"checkBorder"} type={"checkbox"} component={"input"}/>
        </div>
        <div className="formItems">
            <Field name="advType" component="select" onChange={(event) => selectType(event.target.value)}>
                <option value="">Выберите тип объявления...</option>
                {adv.map(w => (
                    <option value={w.id} key={w.data}>
                        {w.data}
                    </option>
                ))}
            </Field>
        </div>
        {typeNum != null && adv[typeNum].optData !== undefined && <div className="formItems">
            <Field name="advCat" component="select">
                <option value="">Выберите подраздел...</option>
                {adv[typeNum].optData.map(w => (
                    <option value={w.id} key={w.txt}>
                        {w.txt}
                    </option>
                ))}
            </Field>
        </div>}
        <div className="formItems">
            <Field placeholder={"Введите текст объявления..."} name={"advText"} type={"text"} component={"textarea"}/>
        </div>
        <button>Подать объявление</button>
    </Form>
};

const AdvReduxForm = reduxForm({
    form: 'task',
    enableReinitialize: true,
})(AdvForm);

export default AdvReduxForm;
