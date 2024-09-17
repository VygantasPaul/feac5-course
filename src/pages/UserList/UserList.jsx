// eslint-disable-next-line no-unused-vars
import React, {
    useEffect,
    useState
} from 'react';
import {
    Link
} from 'react-router-dom';
//import './UserList.css'; // Įsitikinkite, kad CSS failas yra teisingai importuotas
import styles
    from './UserList.module.css'

const UserList = () => {
    const [users, setUsers] = useState( [] ); // Initialize as an empty array

    useEffect( () => {
        fetch( 'https://jsonplaceholder.typicode.com/users' ).then( res => res.json() ).then( setUsers );
    }, [] );

    return (
        <div className={ styles.userList }>
            <div className="container">

                <h1>User List</h1>
                <ul>
                    { users.map( user => (
                        <li key={ user.id }>
                            <Link to={ `/user/${ user.id }` }>{ user.name }</Link>
                        </li>
                    ) ) }
                </ul>
            </div>
        </div>
    );
};

export default UserList;
