import React from 'react';
import ReactDOM from 'react-dom';
import TransferForm from './TransferForm';
import TransferList from './TransferList'

function Example() {

    constructor(props){
        super(props)
        this.state = {
            money: 0.0,
            transfers: [],
            error: null
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12-m-t-md">
                    <h1 className="title"> $ {this.state.money} </h1>
                </div>
                <div className="col-md-12">
                    <TransferForm />
                </div>
            </div>
            <div className="m-t-md">
                <TransferList />
            </div>
        </div>
    );

}
export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
