import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers, createNewUserService} from '../../services/userService';
import ModalUser from './ModalUser';

class UserManage extends Component {
    constructor(props){
        super(props);
        this.state={
          arrUser: [],
          isOpenModal: false
        }
    }
    async componentDidMount() {
      await this.getAllUserFromReact( )
    }

  handleAddNewUser = ()=>{
    this.setState({
      isOpenModal: true
    })
  }

  getAllUserFromReact = async()=>{
    let response = await getAllUsers('ALL');
    if(response && response.errCode === 0)
    {
      this.setState({
        arrUser: response.users
      })
    }
  }

  toggleModal = ()=>{
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    })
  }

  createNewUser = async(data)=>{
    try {
      let reponse = await createNewUserService(data)
      if(reponse && reponse.errCode !== 0){
        alert(reponse.errMessage)
      }else{
        await this.getAllUserFromReact();
        this.setState({
          isOpenModal: false
        })
      }
      console.log("reponse create user", reponse)
    } catch (error) {
      console.log(error)
    }
  }

    render() {
        let arrUser = this.state.arrUser;
        return (
            <div className="user-container">
              <ModalUser
                isOpen = {this.state.isOpenModal}
                toggleFromParent = {this.toggleModal}
                createNewUser = {this.createNewUser}
              
              />
                <div className='title text-center'>
                    Manage user with Bún đậu
                </div>
                <div>
                    <button  class='btn btn-primary px-3'
                    onClick={()=>{this.handleAddNewUser()}}>
                    <i class='fas fa-plus'></i>
                    Add a new user
                    </button>
                </div>

                <div className='user-table mt-3 mx-1'>
                  <table id="customers">
                    <tr>
                      <th>Email</th>
                      <th>FirstName</th>
                      <th>LatsName</th>
                      <th>Adress</th>
                      <th>Action</th>
                    </tr>
                    {arrUser && arrUser.map((item,index)=>{
                      console.log('eric check map', item,index)
                      return(
                        <>
                          <tr>
                            <td>{item.email}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.address}</td>
                            <td>
                              <button className='btn-edit'><i className='fas fa-pencil-alt'></i></button>
                              <button className='btn-delete'><i className='fas fa-trash'></i></button>
                            </td>
                          </tr>
                        </>
                      )                        
                    })
                  }
                  </table>
                </div>
              </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
