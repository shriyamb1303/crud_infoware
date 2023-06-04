import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Userprofile = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log(`Error: ${err}`))
    })

    const deleteUser = () => {
        axios.delete(`http://localhost:3001/deleteuser/${id}`)
            .then(res => {
                alert("User deleted successfully")
                // window.location.reload()
                navigate('/');
            }).catch(err => console.log(`Error: ${err}`))
    }


    return (
        <div className='pt-5'>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
                    <div class="max-h-96 md:h-screen">
                        <img class="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                    <div class="flex bg-gray-100 p-10">
                        <div class="mb-auto mt-auto max-w-lg">
                            <h1 class="text-3xl uppercase">{user.name}</h1>
                            <p class="font-semibold mb-5">{user.job}</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                            <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me at {user.email}</button>
                            <div className="mt-6 ml-5">
                                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mr-10 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><Link to={`/edituser/${id}`}>Edit</Link></button>
                                <button onClick={deleteUser} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete user</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userprofile
