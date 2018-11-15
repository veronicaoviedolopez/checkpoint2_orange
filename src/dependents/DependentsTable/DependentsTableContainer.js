import React, {Component} from 'react';
import DependentsTable from './components/DependentsTable';
import { connect } from 'react-redux';
import {fetchDependents, showModal, deleteDepentent} from './../../../src/state/actions/dependentsAction';
import loaddingImage from     './../../../src/images/Loading_icon.gif';
import DependentsHeader from './components/header/dependentsHeader'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddDependentsDialog from './components/addDependents/addDependents';


class DependentsTableContainer extends Component {
    handleClickSetDependents = () => {
        console.log(this.props.showingModal);
        this.props.showModal();
    }


    componentDidMount(){
        this.props.fetchDependents(this.props.match.params.usuario);
    }
    
    handleDeleteDependents=(id) =>{
        console.log("voy a borrar", id);
        this.props.deleteDepentent(id,this.props.match.params.usuario);
    }

    render(){
        return(
            <div>
                <DependentsHeader usuario={this.props.match.params.usuario} />
                <Button variant="fab" color="secondary" aria-label="Add" onClick={this.handleClickSetDependents}  >
                        <AddIcon />
                </Button>    
                <DependentsTable onDeleteDependents={(e)=>this.handleDeleteDependents(e)} ></DependentsTable>
                <AddDependentsDialog></AddDependentsDialog>
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
    showModal,
    deleteDepentent,
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        errorMessage:state.errorMessage,
        showingModal:state.showingModal,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DependentsTableContainer);