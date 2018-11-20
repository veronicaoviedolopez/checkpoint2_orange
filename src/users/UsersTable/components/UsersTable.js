import React from 'react';
import {Table} from 'reactstrap';
import './UsersTable.css'
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const UsersTable =props => 
    <Table dark>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Apellidos</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
            <tbody>
                {props.usersList.map(x=> {
                    return(
                        <tr key={x._id}>
                            <td>{x.nombre}</td>
                            <td>{x.edad}</td>
                            <td>{`${x.apellidos.paterno} ${x.apellidos.materno}`}</td>
                            <td><EditIcon onClick= {()=>props.onUpdateUser(x)}/></td>
                            <td><DeleteIcon onClick={()=>props.onDeleteUser(x)}/></td>
                        </tr>
                    )         
                })}
            </tbody>
    </Table>
const mapStateToProps = ({usersReducer})=>{
    return usersReducer;
}

export default connect(mapStateToProps)(UsersTable);