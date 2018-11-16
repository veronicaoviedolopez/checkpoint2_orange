import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';
import {showDeleteModal,deleteDependent} from  './../../../../state/actions/dependentsAction';


class DeleteDependentDialog extends React.Component {
    handleClose = () => {
      this.props.showDeleteModal();
    }
  
    handleClickDeleteDependent = () => {
      console.log("dependiente a borrar: ",this.props.dependentId);
      console.log("del usuario: ",this.props.userId);
      this.props.deleteDependent(this.props.dependentId, this.props.userId);
    }
   
    render() {
      return (
        <div>
         <Dialog
            open={this.props.showingDeleteModal}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Eliminar Dependiente</DialogTitle>
            <DialogContent>
            <p>Estas seguro que deseas eliminar el dependiente selecionado: {this.props.dependentName}?</p>
            {this.props.dependentId}<br></br>
            {this.props.userId}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={()=>this.handleClickDeleteDependent()} color="primary">
                Eliminar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
        showingDeleteModal:state.showingDeleteModal,
        userId: state.userId,
        dependentId: state.dependentId,
        dependentName: state.dependentName,
    }
  }
  
  const mapDispatchToProps = {
    showDeleteModal,
    deleteDependent
  }
  
  
  export default  connect(mapStateToProps, mapDispatchToProps)(DeleteDependentDialog)