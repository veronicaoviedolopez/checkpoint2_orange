import React, {Component} from 'react';
import UsersTable from './components/UsersTable';
import { connect } from 'react-redux';
import {fetchUsers, showAddEditModal, deleteUser, showDeleteModal, setUser} from './../../../src/state/actions/usersAction';
import loaddingImage from     './../../../src/images/Loading_icon.gif';
import UserHeader from './components/header/usersHeader'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddUserDialog from './components/addUser/addUser';
import DeleteUserDialog from './components/deleteUser/deleteUser';


class UsersTableContainer extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }
    
    handleAddUser = () => {
        const user = {
            _id:"",
            nombre: "",
            apellidos: {
              paterno:"",
              materno:"",
            },
            edad:0,
        };
        this.handleSetUser(user);
        this.props.showAddEditModal();
    }

    handleDeleteUser=(x) =>{
        this.handleSetUser(x);;
        this.props.showDeleteModal();
    }

    handleUpdateUser = (x) =>{
        this.handleSetUser(x);
        this.props.showAddEditModal();
    }

    handleShowUser = (x)=>{
        this.handleSetUser(x);
        this.props.showAddEditModal();
    }

    handleSetUser=(x) =>{
        this.props.setUser(x);
    }

    render(){
        return(
            <div>
                <UserHeader />
                <Button variant="fab" color="secondary" aria-label="Add" onClick={this.handleAddUser}  >
                        <AddIcon />
                </Button>    
                <div className="divTable" >
                <UsersTable 
                    onUpdateUser={(x)=>this.handleUpdateUser(x)} 
                    onDeleteUser={(x)=>this.handleDeleteUser(x)} 
                    onShowUser = {(x)=>this.handleShowUser(x)} 
                    onSetUser= {(x)=>this.handleSetUser(x)}
                />    
                </div>
                
                
                <AddUserDialog/>	
                <DeleteUserDialog/>
                { this.props.loading ?
                    <img src={loaddingImage} alt=""/>
                    :null 
                }
                { this.props.errorMessage !=="" ?
                    <p> Error: {this.props.errorMessage}</p> 
                    :null
                }
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchUsers,
    showAddEditModal,
    deleteUser,
    showDeleteModal,
    setUser,
}

const mapStateToProps = ({usersReducer}) => {
    return  usersReducer;
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersTableContainer);