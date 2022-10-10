import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ModalUser extends Component {

   constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        address:'',
    }
   }

    componentDidMount() {
    }

    toggle = ()=>{
        this.props.toggleFromParent()
    }

    handleOnChangeInPut =(event,id)=>{
        let copyState = {...this.state}
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        });

    }

    checkValidateInput = ()=>{
        let validate = true;
        let arrInput = ["email", "password", "firstName", "lastName", "address"];
        for(let i = 0; i < arrInput.length; i++){
            if(!arrInput[i]){
                validate = false;
                alert("Missing parameter: " + arrInput[i]);
                break;
            }
        }

        return validate;
    }

    handleAddNewUser = ()=>{
     let isValid = this.checkValidateInput();
     if(isValid === true){
        this.props.createNewUser(this.state)
     }
    }


    render() {
        console.log('check child props', this.props)
        console.log('check child open modal', this.props.isOpen)
        return (
            <Modal isOpen={this.props.isOpen} 
                    toggle={()=>{this.toggle()}} 
                    className={'adbcClassName'}
                    size="lg"
                    centered
            >
            <ModalHeader toggle={()=>{this.toggle()}}>Create new user</ModalHeader>
            <ModalBody>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 form-group'>
                            <label>Email</label>
                            <input type='text'
                            onChange={(event)=>{this.handleOnChangeInPut(event,"email")}}
                            value = {this.state.email}
                            />
                        </div>
                        <div className='col-6 form-group'>
                            <label>Password</label>
                            <input type='password' 
                            onChange={(event)=>{this.handleOnChangeInPut(event,"password")}}
                            value = {this.state.password}
                        
                        />
                        </div>
                        <div className='col-6 form-group'>
                            <label>FirstName</label>
                            <input type='text' 
                            onChange={(event)=>{this.handleOnChangeInPut(event,"firstName")}}
                            value = {this.state.firstName}
                        />
                        </div>
                        <div className='col-6 form-group'>
                            <label>LatsName</label>
                            <input type='text' 
                            onChange={(event)=>{this.handleOnChangeInPut(event,"lastName")}}
                            value = {this.state.lastName}
                            
                        />
                        </div>

                        <div className='col-6 form-group'>
                            <label>Adress</label>
                            <input type='text' 
                            onChange={(event)=>{this.handleOnChangeInPut(event,"address")}}
                            value = {this.state.address}
                            
                        />
                        </div>

                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className='px-3' onClick={()=>{this.handleAddNewUser()}}>
                   Add new
                </Button>
                <Button color="secondary" className='px-3' onClick={()=>{this.toggle()}}>
                    Close
                </Button>
            </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);






