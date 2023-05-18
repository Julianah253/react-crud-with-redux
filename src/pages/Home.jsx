import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const Home = () => {
   const users = useSelector((state) => state.users)
   console.log(users)
  return (
    <div className="container mt-5">
        <h2 className="text-center my-5 text-secondary"> Crud Application using Redux Toolkit </h2>
        <Link to="/create" className="btn btn-success my-3"> Create + </Link>
        <table className="table">
            <thead>
                <tr>
                    <th> ID </th>
                    <th> NAME </th>
                    <th> EMAIL </th>
                    <th> ACTION </th>
                </tr>
            </thead>
            <tbody>
               {
                users.map((user, index)=>(
                    <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/update/${user.id}`} className="btn btn-primary me-3" > Edit </Link>
                        <button className="btn btn-danger"> Delete </button>
                    </td>
                </tr>
                ))
               }
            </tbody>
        </table>
    </div>
  )
}

export default Home