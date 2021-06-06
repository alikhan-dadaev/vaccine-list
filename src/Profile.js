import React from 'react';
import {useSelector} from "react-redux";

function Profile(props) {
    const openedCitizen = useSelector(state => state.openedCitizen);

    const profile = useSelector(state => {
        return state.citizens.filter((item, index) => {
            if(index === openedCitizen) {
                return true;
            }

            return false;
        })
    })

    if(openedCitizen===null) {
        return null;
    }


    return (
        <div>
            <h2>
                Имя: {profile[0].name}
            </h2>
            <h3>
                Описание:
            </h3>
            <div>
                {profile[0].history}
            </div>
        </div>
    );
}

export default Profile;