import React from 'react';
import {useDispatch, useSelector} from "react-redux";


function List(props) {
    const  dispatch = useDispatch();

    const citizens = useSelector(state => state.citizens);

    const  getFriendlyValueOfStage = (stage) => {
        switch (stage) {
            case 0:
                return 'Не вакцинирован';
            case 1:
                return 'Вакцинирован наполовину';
            case 2:
                return 'Вакцинирован';
            default:
                return 'ошибка';
        }
    }

    const handleOpen = (index) => {
        dispatch ({
            type: 'open',
            payload: index
        })
    }
    const addFloodedClass = (stage) => {
       switch (stage) {
           case 0:
               return '';
           case 1:
               return "halfFloodedClass";
           case 2:
               return "floodedClass";
           default:
               return '';
       }
    }

    const deletePatient = (deleteItem) => {
        const filteredCitizen = citizens.filter((item, index) => {
            if (index===deleteItem) {
                return false
            }

            return true
        })
        dispatch({
            type: 'deleteOfSelectedPatient',
            payload: filteredCitizen
        })
        }



    return (
        <div>
            <div>
                {citizens.map((citizen, index) => {
                    return(
                        <>
                        <div key={index} className="row border p-3 m-3" onClick={() => handleOpen(index)}>
                            <div className="col-1">
                                {index + 1}
                            </div>
                            <div className="col-1">
                                {citizen.stage === 0 && citizen.age>= 60 ? <span className="icon">!</span>: ''}
                            </div>
                            <div className="col-3">
                                {citizen.name}
                            </div>
                            <div className="col-1">
                                {citizen.age}
                            </div>
                            <div className="col-4">
                                {getFriendlyValueOfStage(citizen.stage)}
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger" onClick={() => deletePatient(index)}>
                                    x
                                </button>
                            </div>
                        </div>
                            <div className={addFloodedClass(citizen.stage)}></div>

                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default List;