import React, { useContext } from 'react';
import { AuthContext } from '../layout/AuthProvider';


const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>this is Home: {user&&<span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;