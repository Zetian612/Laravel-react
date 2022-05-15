import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TransferForm from './TransferForm';
import TransferList from './TransferList'
import url from '../url';
export class Example extends Component{

    // Creamos el constructor
    constructor(props){
        super(props)
        // definimos el state
        this.state = {
            money: 0.0,
            transfers: [],
            error: '',
            form: {
                description: '',
                amount: '',
                wallet_id: 1
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

   async handleSubmit(e){
        e.preventDefault()
        try {
            let config = {
               method: 'POST',
               headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
               },
               body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/api/transfer`, config)
            let data = await res.json()

            this.setState({
                transfers: this.state.transfers.concat(data),
                money: this.state.money + (parseInt(data.amount)),
                error: ""
            })

        } catch (error) {
            this.setState({
                error: "Error while processing the request" + error
            })
        }
    }

    handleChange(e){
       this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value
        }
       })
    }
        async componentDidMount(){
            try{
                let res = await fetch(`${url}/api/wallet`)
                let data = await res.json()
                this.setState({
                    money: data.money,
                    transfers: data.transfers,
                    error: ""
                })
            } catch(error){
                this.setState({
                    error: "No se pudo obtener el dinero."
                })
            }
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12-m-t-md">

                        {/* mostramos el valos del state en money */}
                        <p className="title"> $ {this.state.money} </p>
                        <p style={{ color: 'red'}}>{ this.state.error}</p>
                    </div>
                    <div className="col-md-12">
                        <TransferForm
                        form={this.state.form}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
            <div className="m-t-md">
                <TransferList
                transfers={this.state.transfers}
                />
            </div>
        </div>
    );

}
}
export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
