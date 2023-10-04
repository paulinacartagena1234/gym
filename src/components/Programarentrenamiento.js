import React from 'react'

function Programarentrenamiento() {
    return (
        <div>
            <h1 className='text-gray-900'>Programar entrenamiento</h1>
            <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">

                </label>
                <div className="mt-2">
                    <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Programa tu entranamiento a tu gusto </p>
            </div>

        </div>
    )
}

export default Programarentrenamiento
