import React, {Component} from 'react';
import {Table} from 'reactstrap';

 class UserTable extends Component {
    render() {
      return (
        <Table dark>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            </tr>
          </tbody>
        </Table>
      );
    }
  }

  export default UserTable;