import React from 'react';
import Title from '../Components/Title';
import Sidebar  from '../Components/Sidebar';

const Users =()=>{
    return(
        <>
            <div className="users">
                <Sidebar></Sidebar>
                <div>
                    <Title title="U S E R S"></Title>
                </div>
            </div>
            
        </>
    )
}
export default Users;