import React, {Component} from 'react';
import DependentsTable from './components/DependentsTable';
import { connect } from 'react-redux';
import {fetchDependents} from './../../../src/state/actions/dependentsAction';
import loaddingImage from     './../../../src/images/Loading_icon.gif';
import Button from '@material-ui/core/Button';
import DependentsHeader from './components/header/dependentsHeader'

class DependentsTableContainer extends Component {
    handleClickGetDependents = () => {
        this.props.fetchDependents();
    }


    render(){
        return(
            <div>
                <Button onClick={this.handleClickGetDependents}>Cargar Dependientes</Button>
                <DependentsHeader usuario="Jacinto Papá" />
                <DependentsTable></DependentsTable>
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
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        errorMessage:state.errorMessage,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DependentsTableContainer);