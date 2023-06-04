import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Paginationp from './Pagination';
import { Link } from 'react-router-dom';

const User = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect(() => {
        axios.get('http://localhost:3001/getusers')
            .then(res => {
                setListOfUsers(res.data)
            })
    })

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = listOfUsers.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <h1 className='w-full my-10 text-5xl font-bold leading-tight text-center text-gray-800'>List of Users</h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400 ml-24 mt-5 pl-60">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email Address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Job Role
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((user) => {
                            return (
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.job}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.phone}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Link to={`/user/${user._id}`}>View Profile</Link></a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Paginationp
                totalPosts={listOfUsers.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default User