import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from '../firebase';

function Entrenamiento({}) {
    const {firebase} = useContext(FirebaseContext);
    return (
        <div class=''>
            <h1 className='text-gray-600 '>Entrenamiento</h1>
            
            
        </div>
    )
}

export default Entrenamiento;
