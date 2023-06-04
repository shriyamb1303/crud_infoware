import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditUser = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState("");

    const [currentuser, setCurrentuser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${id}`)
            .then(res => {
                setCurrentuser(res.data)
            })
    })

    const updateUser = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/users/edit/${id}`, {
            name,
            email,
            job,
            phone
        })
            .then((response) => {
                alert("User updated successfully");
                navigate(`/user/${id}`);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update user</h2>
                    <form action="#">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div class="sm:col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                <input type="text" placeholder={currentuser.name} onChange={(e) => setName(e.target.value)} name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                            </div>
                            <div class="w-full">
                                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" placeholder={currentuser.email} onChange={(e) => setEmail(e.target.value)} name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                            </div>
                            <div class="w-full">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                <input type="number" placeholder={currentuser.phone} onChange={(e) => setPhone(e.target.value)} name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                            </div>
                            <div>
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job</label>
                                <input type='text' placeholder={currentuser.job} onChange={(e) => setJob(e.target.value)} id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                </input>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button onClick={updateUser} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Update User
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default EditUser
