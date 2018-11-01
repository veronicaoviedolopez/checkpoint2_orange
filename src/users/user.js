import React, { Component } from 'react';
import UsersTable from './userTable/userTable';
import {Button} from 'reactstrap';

class Users extends Component {

  render() {
    return (
      <div className="">
          <Button>Cargar Usuarios</Button>
          <UsersTable/>
        </div>
    );
  }
}

export default Users;
