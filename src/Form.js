import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function Form(props) {

    const dispatch = useDispatch();

    const [citizens, setCitizens] = useState(useSelector(state => state.citizens));



    const [nameField, setNameField] = useState('');

    const [ageField, setAgeField] = useState('');

    const [stageField, setStageField] = useState('');

    const [addressField, setAddressField] = useState('');

    const [historyField, setHistoryField] = useState('');


    const handleChangeNameBar = (e) => {
        setNameField(e.target.value)
    }
    const handleChangeAgeBar = (e) => {
        setAgeField(e.target.value)
    }
    const handleChangeStageBar = (e) => {
        setStageField(e.target.value)
    }
    const handleChangeAddressBar = (e) => {
        setAddressField(e.target.value)
    }
    const handleChangeHistoryBar = (e) => {
        setHistoryField(e.target.value)
    }
    const handleClickAdd = () => {
        dispatch ({
            type: 'newPatient',
            payload: {
                name: nameField,
                age: ageField,
                stage: stageField,
                address: addressField,
                history: historyField
            }
        }
        )
    }


    return (
        <div className="container d-flex justify-content-between">
            <div className="row w-75">
                <div className="col">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="ФИО"
                        value={citizens.name}
                        onChange={handleChangeNameBar}
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control"
                        type="number"
                        placeholder="Возраст"
                        value={citizens.age}
                        onChange={handleChangeAgeBar}
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Стадия"
                        value={citizens.stage}
                        onChange={handleChangeStageBar}
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Адрес"
                        value={citizens.address}
                        onChange={handleChangeAddressBar}
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="История"
                        value={citizens.history}
                        onChange={handleChangeHistoryBar}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={handleClickAdd}>
                        Добавить
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Form;