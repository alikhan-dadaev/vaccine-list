import React from 'react';
import Form from "./Form";
import List from "./List";
import Profile from "./Profile";

function Main(props) {
    return (
        <div>
          <div className="container d-flex justify-content-between">
                <div className="row w-100">
                    <div className="col">
                        <Form />
                    </div>
                </div>
          </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-9">
                        <List />
                    </div>
                    <div className="col">
                        <Profile />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;