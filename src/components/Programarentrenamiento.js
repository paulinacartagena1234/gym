import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FirebaseContext } from '../firebase'

function Programarentrenamiento() {

    const { firebase } = useContext(FirebaseContext);
    //Validar Campos
    const formik = useFormik({
        initialValues: {
            date: '',
            about: ''

        }, validationSchema: Yup.object({
            date: Yup.date().default(() => new Date()).required(),
            about: Yup.string()

        }),
        onSubmit: training => {
            try {
                firebase.db.collection('training').add(training);
                // console.log(training)
            }
            catch (e) {
                console.log('error: ', e)
            }
        }
    })
    return (
        <div className='flex-1 justify-center text-center'>
            <h1 className='block text-sm font-medium leading-6 text-gray-900'>Programar entrenamiento</h1>
            <form
                onSubmit={formik.handleSubmit}
            >
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                    Fecha
                </label>
                <div className="mt-2">
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.date && formik.errors.date ? (
                    <div>
                        <p className='font-bold text-red'>Ocurrio un error</p>
                        <p>{formik.errors.date}</p>
                    </div>
                ) : null}
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
                        value={formik.values.about}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
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
                <p className="mt-3 text-sm leading-6 text-gray-600">Programa tu entrenamiento a tu gusto</p>
            </form>
        </div>
    )
}

export default Programarentrenamiento
