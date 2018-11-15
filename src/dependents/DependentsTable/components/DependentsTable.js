import React from 'react';
import {Table} from 'reactstrap';
import './DependentsTable.css'
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const DependentsTable =props => 
                <Table dark>
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>nombre_completo</th>
                            <th>edad</th>
                            <th>dependencia</th>
                            <th>_usuario</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dependentsList.map(x=> {
                            return(
                                <tr key={x._id}>
                                    <td>{x._id}</td>
                                    <td>{x.nombre_completo}</td>
                                    <td>{x.edad}</td>
                                    <td>{x.dependencia}</td>
                                    <td>{x._usuario}</td>
                                    <td><EditIcon/></td>
                                    <td><DeleteIcon onClick={()=>props.onDeleteDependents(x._id)}/></td>
                                </tr>
                            )         
                        })}
                    </tbody>
                </Table>

const mapStateToProps = (state)=>{
    return{
        dependentsList: state.dependentsList
    }
}

export default connect(mapStateToProps)(DependentsTable);