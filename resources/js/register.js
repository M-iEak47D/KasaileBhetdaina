import React, { Component } from 'react';

export default class Example extends Component {
    constructor(){
        super();
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit
        this.state = {
            name:'',
            phone:'',
        }
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }
    onChangePhone(e){
        this.setState({
            phone:e.target.value

        })
    }
    onSubmit(e){
        e.preventDefault();
        const user = {
            name: "aalok",
            phone: '9816961421'
        }
        let uri = 'http://localhost:8000/api/register';
        axios.post(uri, user).then((res) => console.log(res.data));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Register</div>

                            <div className="panel-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label> Name</label>
                                                <input type="text" className="form-control"  onChange={this.onChangeName}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label> Phone Number</label>
                                                <input type="text" className="form-control col-md-6"  onChange={this.onChangePhone}/>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" >Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
