import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import{handleLoginApi} from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            hiddenPassword: false,
            errorMessage: ''
        }
    }

    handleOnchangeInput = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleOnchangePassword = (event)=>{
        this.setState({
            password:event.target.value
        })
    }

    handleLogin = async()=>{
        this.setState({
            errorMessage:''
        })
        try {
            let data =  await handleLoginApi(this.state.username,this.state.password)
            if(data&&data.errCode !== 0 ){
                this.setState({
                    errorMessage: data.message
                })
            }
            if(data&&data.errCode === 0)
            {
                this.props.userLoginSuccess(data.user)
                console.log('login success')
            }
        } catch (error) {
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errorMessage: error.response.data.message
                    })
                }
            }
        }
    }

    handleHidenPass = ()=>{
        this.setState({
            hiddenPassword: !this.state.hiddenPassword
        })
    }


    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>
                            Login
                        </div>

                        <div className='col-12 form-group'>
                            <label>Username</label>
                            <input type='text' 
                                className='form-control' 
                                value={this.state.username}
                                onChange={(event)=>this.handleOnchangeInput(event)}

                                />
                        </div>

                        
                        <div className='col-12 form-group password' >
                            <label>Password</label>
                            <div className='custom-input-password'>
                            <input type={this.state.hiddenPassword ? 'text':'password'}
                                className='form-control'
                                value={this.state.password}
                                onChange={(event)=>{this.handleOnchangePassword(event)}}/>
                            <span
                                onClick={()=>{this.handleHidenPass()}}>
                                <i className={this.state.hiddenPassword? 'far fa-eye' : 'far fa-eye-slash'}></i>
                            </span>
                            </div>
                                
                                
                        </div>

                        <div className='col-12' style={{color:'red'}}>
                            {this.state.errorMessage}
                        </div>

                       <div className='col-12 button-login'>
                            <button
                            onClick={()=>{this.handleLogin()}}>Login</button>
                       </div>

                        <div className='col-12'>
                            <span>Forgot your password</span>
                        </div>

                        <div className='col-12'>

                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor)),
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
