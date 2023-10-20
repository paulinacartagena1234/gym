import React from 'react'

function Programarentrenamiento() {
    return (
        <div>
            <h1 className='text-gray-900'>Programar entrenamiento</h1>
            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                Fecha
            </label>
            <div className="mt-2">
                <input
                    type="date"
                    name="date"
                    id="date"
                    className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value=""
                />
            </div>
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Descripción
            </label>
            <div className="mt-2">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    placeholder='Que vas a hacer...'
                    className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Programa tu entrenamiento a tu gusto</p>
        </div>
    )
}

export default Programarentrenamiento
