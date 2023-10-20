import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FirebaseContext } from '../firebase'

function Register() {

    const { firebase } = useContext(FirebaseContext);
    //Validar Campos
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: 0,
            department: '',
            municipality: '',
            //Colocar todos los campos

        }, validationSchema: ({
            firstName: Yup.string()
                .min(3, 'El nombre debe tener minimo 3 caracters')
                .required(),
            lastName: Yup.string()
                .min(3, 'El nombre debe tener minimo 3 caracters')
                .required(),
            age: Yup.number().required().positive().integer(),
            //Validar todos los campos
            department: Yup.string()
                .required(),
            municipality: Yup.string()
                .required(),
        }),
        onSubmit: user => {
            try {
                firebase.db.collection('user').add(user);
                //console.log(user)
            }
            catch (e) {
                console.log('error: ', e)
            }
        }
    })
    return (
        <>
            <div className='flex-1 text-center my-20'>
                <form
                    onSubmit={formik.handleSubmit}
                >
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
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>
                            <p className='font-bold text-red'>Ocurrio un error</p>
                            <p>{formik.errors.firstName}</p>
                        </div>
                    ) : null}
                    {/*Organizar cada uno de los inputs value, onChange, onBlur y la función de error despues del DIV*/}
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
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                    </div>
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>
                            <p className='font-bold text-red'>Ocurrio un error</p>
                            <p>{formik.errors.lastName}</p>
                        </div>
                    ) : null}
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
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.age && formik.errors.age ? (
                            <div>
                                <p className='font-bold text-red'>Ocurrio un error</p>
                                <p>{formik.errors.age}</p>
                            </div>
                        ) : null}

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
                                    value={formik.values.department}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value={'Antioquia'}>Antioquia</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    {formik.touched.department && formik.errors.department ? (
                        <div>
                            <p className='font-bold text-red'>Ocurrio un error</p>
                            <p>{formik.errors.department}</p>
                        </div>
                    ) : null}
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
                                value={formik.values.municipality}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
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
                    {formik.touched.municipality && formik.errors.municipality ? (
                        <div>
                            <p className='font-bold text-red'>Ocurrio un error</p>
                            <p>{formik.errors.municipality}</p>
                        </div>
                    ) : null}
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
            </div>
        </>
    )
}

export default Register
