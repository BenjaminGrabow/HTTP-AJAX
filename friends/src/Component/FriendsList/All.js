import React from 'react';

const All = (props) => {
        return ( 
                props.friendly.map(friend =>
                        {
                               return <div>
                                       <div>Name: {friend.name}</div>
                                       <div>Age: {friend.age}</div>
                                       <div>Email: {friend.email}</div>
                               </div>
                       })
         );
}
 
export default All;