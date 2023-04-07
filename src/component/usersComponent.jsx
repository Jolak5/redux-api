import { useSelector } from 'react-redux'
import React from 'react'
// import { extraReducers } from '../redux/users/usersSlice';
function getRandId(){
    return String(Math.round(Math.random() * 10**16))
  }

export default function User() {

    const eachUser = useSelector(state => state.users.user);
    const IsLoading = useSelector(state => state.users.isLoading);
    const error = useSelector(state => state.users.error);

  return (
    <div>
        {IsLoading ? <p>This is loading</p> : "not loading"}
        {error ? <p>There is an error</p> : "error"}
        {eachUser.map((user) => <li key={getRandId()}>{user}</li>)}
    </div>
  )
}
