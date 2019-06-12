import React from 'react';

const SubFriend = (props) => {
        return (
                props.friendData.map(friend =>
                 {
                        return <div>
                                <div>Name: {friend.name}</div>
                                <div>Age: {friend.age}</div>
                                <div>Email: {friend.email}</div>
                        </div>
                }
                )
        );
}

export default SubFriend;