import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';
import {showModal,addDependents} from  './../../../../state/actions/dependentsAction';


class AddDependentsDialog extends React.Component {
  state= {
    nombre :"",
    edad: "",
    parentesco:"",
  }

  clearInputs = ()=>{
    this.setState({
      nombre :"",
      edad: "",
      parentesco:"",
    });
  }

  handleClose = () => {
    this.props.showModal();
    this.clearInputs();
  }

  handleClickAddDependent = () => {
    this.props.addDependents(this.state.nombre, this.state.parentesco,this.state.edad,this.props.userId);
    this.clearInputs();
  }

  handleInputChange = e => {
    switch(e.target.id){
      case "nombre":
        this.setState({nombre: e.target.value, })
        break;
      case "edad":
        this.setState({edad: e.target.value, })
        break;
      case "parentesco":
        this.setState({parentesco: e.target.value, })
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div>
       <Dialog
          open={this.props.showingModal}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Agregar Dependiente</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="nombre"
              label="Nombre Completo"
              type="text"
              fullWidth
              value={this.state.nombre}
              onChange= {(e) => this.handleInputChange(e)}
            />

            <TextField
              margin="dense"
              id="edad"
              label="Edad"
              type="number"
              fullWidth
              value={this.state.edad}
              onChange = {(e) => this.handleInputChange(e)}
            />

            <TextField
              margin="dense"
              id="parentesco"
              label="Parentesco"
              type="text"
              fullWidth
              value={this.state.parentesco}
              onChange={(e) => this.handleInputChange(e) }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleClickAddDependent} color="primary">
              Guardar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      showingModal:state.showingModal,
      newDependent: state.newDependent,
      userId: state.userId,
  }
}

const mapDispatchToProps = {
  showModal,
  addDependents
}


export default  connect(mapStateToProps, mapDispatchToProps)(AddDependentsDialog)