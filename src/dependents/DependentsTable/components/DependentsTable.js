import React from 'react';
import {Table} from 'reactstrap';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './DependentsTable.css'

const DependentsTable=() =>{
    return(
        <div>
            <h3>[NombreCompleto] </h3>
            <div className="header" >
                <div className="subHeader">
                <h5 > Dependientes  </h5>
                </div>
                    <Button variant="fab" color="secondary" aria-label="Add">
                        <AddIcon />
                    </Button>
            </div>
            <Table dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido Materno</th>
                        <th>Apellido Paterno</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Jose    
                        </td>
                        <td>
                            Perez    
                        </td>
                        <td>
                            Lopez    
                        </td>
                        <td>
                            15    
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            Pedro    
                        </td>
                        <td>
                            Gonzalez    
                        </td>
                        <td>
                            Solis    
                        </td>
                        <td>
                            3  
                        </td>
                    </tr>

                                        <tr>
                        <th scope="row">
                            3
                        </th>
                        <td>
                            Maria    
                        </td>
                        <td>
                            Lopez    
                        </td>
                        <td>
                            Perez    
                        </td>
                        <td>
                            20    
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
    
}
export default DependentsTable;