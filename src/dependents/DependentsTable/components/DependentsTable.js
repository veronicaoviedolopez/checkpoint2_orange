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
                            <th>Nombre Completo</th>
                            <th>Edad</th>
                            <th>Parentesco</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dependentsList.map(x=> {
                            return(
                                <tr key={x._id}>
                                    <td>{x.nombre_completo}</td>
                                    <td>{x.edad}</td>
                                    <td>{x.dependencia}</td>
                                    <td><EditIcon onClick= {()=>props.onUpdateDependent(x)}/></td>
                                    <td><DeleteIcon onClick={()=>props.onDeleteDependent(x._id,x.nombre_completo)}/></td>
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