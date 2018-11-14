import React from 'react';
import {Link} from 'react-router-dom';


const Home = props =>{
    return(
        <div>
            <h1>ESTAS EN HOME!</h1>
            <Link to="/dependents">Ver todos los dependientes </Link>
        </div>

    )
}

export default Home;
