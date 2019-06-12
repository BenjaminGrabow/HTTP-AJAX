import React from 'react';


const FriendInput = (props) => {

                return (
                        <div>
                                <form onSubmit={props.handle} >
                        <input type="text" name="name" onChange={props.changeHandle} placeholder="Add Name" ></input>
                        <input type="text" name="age" onChange={props.changeHandle} placeholder="Add Age" ></input>
                        <input type="text" name="email" onChange={props.changeHandle} placeholder="Add Email" ></input>
                                        <button type="submit" >Add Friend</button>
                                </form>
                        </div>
                );
        }

export default FriendInput;