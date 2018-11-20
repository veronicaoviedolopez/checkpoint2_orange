import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';
import {showDeleteModal,deleteUser} from  './../../../../state/actions/usersAction';


class DeleteUserDialog extends React.Component {
    handleClose = () => {
      this.props.showDeleteModal();
    }
  
    handleClickDeleteDependent = () => {
      this.props.deleteUser(this.props.user);
    }
   
    render() {
      return (
        <div>
         <Dialog
            open={this.props.showingDeleteModal}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Eliminar Usuario</DialogTitle>
            <DialogContent>
            <p>¿Esta seguro que desea eliminar el usuario seleccionado
              <br/>
            {this.props.user.nombre} {this.props.user.apellidos.paterno} {this.props.user.apellidos.materno}?
            </p>
            <br/>
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
  
  const mapStateToProps = ({usersReducer}) => {
    return usersReducer;
  }
  
  const mapDispatchToProps = {
    showDeleteModal,
    deleteUser
  }
  
  
  export default  connect(mapStateToProps, mapDispatchToProps)(DeleteUserDialog)