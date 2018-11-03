import React, {Component} from 'react';
import {Table} from 'reactstrap';
import './DependentsTable.css'
import { connect } from 'react-redux';

class DependentsTable extends Component{
    render() {
        return(
                <Table dark>
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>nombre_completo</th>
                            <th>edad</th>
                            <th>dependencia</th>
                            <th>_usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dependentsList.map(x=> {
                            return(
                                <tr key={x._id}>
                                    <td>{x._id}</td>
                                    <td>{x.nombre_completo}</td>
                                    <td>{x.edad}</td>
                                    <td>{x.dependencia}</td>
                                    <td>{x._usuario}</td>
                                </tr>
                            )         
                        })}
                    </tbody>
                </Table>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        dependentsList: state.dependentsList
    }
}

export default connect(mapStateToProps)(DependentsTable);