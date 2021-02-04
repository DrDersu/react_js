import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Main.css'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React from "react";
import Elements from "./Elements";

const users = [
    {id: 1, email: 'admin@mail.ru', password: 'admin', username: 'Admin'},
    {id: 2, email: 'erlan@mail.ru', password: 'erlan', username: 'Erlan'},
    {id: 3, email: 'john@gmail.com', password: 'john123', username: 'John'},
    {id: 4, email: 'alexia@yahoo.com', password: 'qwertyalex', username: 'Alexia'}
]

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {onlineStatus: false, name: 'null'};
        this.loginUser = this.loginUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }


    loginUser() {
        var email_input = document.getElementById('email');
        var pass_input = document.getElementById('password');
        var a = true;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email===email_input.value){
                a = false;
                if (users[i].password===pass_input.value){
                    this.setState({onlineStatus: true, name: users[i].username});
                }
                else{
                    document.getElementById('alert2').className = 'text-danger';
                    pass_input.style.borderBottomColor = 'red';
                }
            }
        }
        if(a){
            document.getElementById('alert1').className = 'text-danger';
            email_input.style.borderBottomColor = 'red';
        }
    }
    logoutUser(){
        this.setState({onlineStatus: false});
    }

    render() {
        if(this.state.onlineStatus){
            return(
                <div>
                    <Header state={this.state}/>
                    <div className="container content">
                        <div className="row mt-4">
                            <div className="col-3">
                                <h6>Username: <span className='text-primary'>{this.state.name}</span></h6>
                                <p className='text-muted mt-3'>status: <span className='text-success'>Online</span></p>
                                <button className='btn btn-danger mt-5' onClick={this.logoutUser}>Log out</button>
                            </div>
                            <div className="col-9 p-0">
                                <Elements/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }else {
            return (
                <div>
                    <Header state={this.state}/>
                    <div className="container content">
                        <div className="row mt-4">
                            <div className="col-3">
                                <form action="" method='post' onSubmit={this.loginUser}>
                                    <label className="text-muted">Email</label>
                                    <input type="email" id="email" className='signInput'/>
                                    <p className='d-none' id='alert1'>Email is incorrect or not existed</p>
                                    <label className="text-muted mt-3">Password</label>
                                    <input type="password" id="password" className="signInput"/>
                                    <p className='d-none' id='alert2'>Password is incorrect</p>
                                    <button className='btn btn-success mt-3' type='submit'>SIGN IN ></button>
                                    <div className='w-100 mt-3'>
                                        <input type="checkbox" name='remember' className='form-check-input'/>
                                        <label className='form-check-label ms-3 text-muted'>Remember me</label>
                                    </div>
                                </form>
                            </div>
                            <div className="col-9 p-0">
                                <Elements/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }
    }
}

export default Main;
