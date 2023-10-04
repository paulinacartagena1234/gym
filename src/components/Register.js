import React from 'react'

function Register() {
    return (
        <form>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="Age" className="block text-sm font-medium leading-6 text-gray-900">
                    Age
                </label>
                <div className="mt-2">
                    <input
                        type="number"
                        name="Age"
                        id="Age"
                        autoComplete="age-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Department
                    </label>
                    <div className="mt-2">
                        <select
                            id="department"
                            name="department"
                            autoComplete="department-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option>Antioquia</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="municipality" className="block text-sm font-medium leading-6 text-gray-900">
                    Municipality
                </label>
                <div className="mt-2">
                    <select
                        id="municipality"
                        name="municipality"
                        autoComplete="municipality-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        <option>Barbosa</option>
                        <option>Girardota</option>
                        <option>Copacabana</option>
                        <option>Bello</option>
                        <option>Medellin</option>
                        <option>Envigado</option>
                        <option>Itagui</option>
                        <option>Sabaneta</option>
                        <option>La Estrella</option>
                        <option>Caldas</option>
                    </select>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    Cancel
                </button>
                <input
                    type="submit"
                    name="Enviar"
                    id="Enviar"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </form>
    )
}

export default Register
