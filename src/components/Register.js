import React from 'react'

function Register() {
    return (
        <form>
            <label className=' text-gray-600'>Registration Information</label>
            <div class='mt-2'>
                <div class=' sm:max-w-md'>
                    <p class=' text-gray-600'>Name</p>
                    <input type='text' name='username' id='username' autocomplete='username' class='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder='name' />
                </div>

            </div>
            <div class='mt-2'>
                <div class='sm:max-w-md'>
                    <p class=' text-gray-600'>Last name</p>
                    <input type='text' name='username' id='username' autocomplete='username' class='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder='last name' />
                </div>
            </div>

            <div class='mt-2'>
                <div class=''>
                    <p class=' text-gray-600'>Edad</p>
                    <input type='text' name='username' id='username' autocomplete='username' class='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder='Edad' />
                </div>
            </div>

            <div class="sm:col-span-3">
                <p class=' text-gray-600'>Departamento</p>
                <div class="mt-2">
                    <select class="block w-full  text-gray-600">
                        <option class=' text-gray-600'>Antioquia</option>
                        <option class='text-gray-600'>Caldas</option>

                    </select>
                </div>
            </div>

            <div class="sm:col-span-3">
                <p class=' text-gray-600'>Municipio</p>
                <div class="mt-2">
                    <select class="block w-full  text-gray-600">
                        <option class=' text-gray-600'>Sabaneta</option>
                        <option class='text-gray-600'>itagui</option>
                        <option class='text-gray-600'>Medellin</option>
                    </select>
                </div>
            </div>


        </form>
    )
}

export default Register
