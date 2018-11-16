import React, {Component} from 'react';
import DependentsTable from './components/DependentsTable';
import { connect } from 'react-redux';
import {fetchDependents, showAddModal, deleteDependent, showDeleteModal, setDependent} from './../../../src/state/actions/dependentsAction';
import loaddingImage from     './../../../src/images/Loading_icon.gif';
import DependentsHeader from './components/header/dependentsHeader'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddDependentsDialog from './components/addDependents/addDependents';
import DeleteDependentDialog from './components/deleteDepedent/deleteDependent';


class DependentsTableContainer extends Component {
    componentDidMount(){
        this.props.fetchDependents(this.props.match.params.usuario);
    }
    
    handleAddDependent = () => {
        this.props.setDependent(
            {
            _id:0,
            nombre_completo: "",
            dependencia: "",
            edad:0,
            _usuario: "",
            }
        );
        this.props.showAddModal();
    }
    handleDeleteDependent=(id, nombre) =>{
        this.props.showDeleteModal(id, nombre);
    }
    handleUpdateDependent = (x) =>{
        console.log("voy a editar",x);
        this.props.setDependent(x);
        this.props.showAddModal();
    }

    render(){
        return(
            <div>
                <DependentsHeader usuario={this.props.match.params.usuario} />
                <Button variant="fab" color="secondary" aria-label="Add" onClick={this.handleAddDependent}  >
                        <AddIcon />
                </Button>    
                <DependentsTable 
                    onUpdateDependent={(x)=>this.handleUpdateDependent(x)} 
                    onDeleteDependent={(id, nombre)=>this.handleDeleteDependent(id, nombre)} 
                />
                <AddDependentsDialog></AddDependentsDialog>
                <DeleteDependentDialog></DeleteDependentDialog>
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
    fetchDependents,
    showAddModal,
    deleteDependent,
    showDeleteModal,
    setDependent,
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        errorMessage:state.errorMessage,
        showingModal:state.showingModal,
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DependentsTableContainer);