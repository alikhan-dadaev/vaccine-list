import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createSelectorHook, Provider} from "react-redux";
import {createStore} from "redux";
import {act} from "@testing-library/react";

const initialState = {
    darkTheme: true,
    openedCitizen: null,
    citizens: [
        {
            name: 'Иванов И.И.',
            age: 45,
            stage: 1,
            history: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            address: 'Moscow'
        },
        {
            name: 'Петров В.Б.',
            age: 64,
            stage: 2,
            history: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            address: 'London',
            sideEffects: 'Кашель'
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'open':
            return {
                ...state,
                openedCitizen: action.payload,
            };
        case 'newPatient':
            return {
                ...state,
               citizens: [
                   ...state.citizens,
                   action.payload
               ]
            }
        case 'deleteOfSelectedPatient':
            return action.payload;


        default:
          return state
    }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
  </React.StrictMode>,


  document.getElementById('root')
);


