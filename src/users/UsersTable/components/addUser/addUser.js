import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';
import {showAddEditModal, addUser, updateUser} from  './../../../../state/actions/usersAction';


class AddUsersDialog extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      nombre : "",
      edad: 0,
      apellidos: {
        paterno:"",
        materno:"",
      },
    }
  }
 
  

  clearInputs = ()=>{
    this.setState({
      nombre :"",
      edad: "",
      apellidos:{
        paterno:"",
        materno:"",
      },
    });
  }

  handleClose = () => {
    this.props.showAddEditModal();
    this.clearInputs();
  }

  handleClickAddUser = () => {
    if (this.props.user._id ==="")
      this.props.addUser({
          nombre: this.state.nombre,
          apellidos: {
            paterno:this.state.apellidos.paterno,
            materno: this.state.apellidos.materno,
          },
          edad: this.state.edad
      });
    else{
      this.props.updateUser({
        _id: this.props.user._id,
        nombre: this.state.nombre,
        apellidos: {
          paterno:this.state.apellidos.paterno,
          materno: this.state.apellidos.materno,
        },
        edad:this.state.edad,
      });
      
    }
   
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
      case "apellidos_paterno":
        this.setState(
          {
            apellidos: 
              { paterno: e.target.value,
                materno: this.state.apellidos.materno,
              }
          }
        );
        break;
        case "apellidos_materno":
          this.setState(
            {
              apellidos: 
                { 
                  materno: e.target.value,
                  paterno:  this.state.apellidos.paterno,
                }
            }
          );
        break;
      default:
        return;
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      nombre : nextProps.user.nombre,
      edad: nextProps.user.edad,
      apellidos: {
        paterno: nextProps.user.apellidos.paterno,
        materno: nextProps.user.apellidos.materno,
      }
    });
  }
  

  render() {
     return (
      <div>
       
       <Dialog
          open={this.props.showingModal}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
          {this.props.user._id === "" ? 
          <p> Agregar User </p>
          :<p> Editar User </p>
          }
          
          </DialogTitle>
          <DialogContent>
          
            <TextField
              autoFocus
              margin="dense"
              id="nombre"
              label="Nombre"
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
              id="apellidos_paterno"
              label="apellido paterno"
              type="text"
              fullWidth
              value={this.state.apellidos.paterno}
              onChange={(e) => this.handleInputChange(e) }
            />

               <TextField
              margin="dense"
              id="apellidos_materno"
              label="apellido materno"
              type="text"
              fullWidth
              value={this.state.apellidos.materno}
              onChange={(e) => this.handleInputChange(e) }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleClickAddUser} color="primary">
              Guardar
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
  showAddEditModal,
  addUser,
  updateUser
}


export default  connect(mapStateToProps, mapDispatchToProps)(AddUsersDialog)