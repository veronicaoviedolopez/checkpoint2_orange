import React, {Component} from 'react';
import DependentsTable from './components/DependentsTable';

class DependentsTableContainer extends Component
{
    render(){
        return(
            <div>
                <DependentsTable></DependentsTable>
            </div>
        )
    }
}

export default DependentsTableContainer;