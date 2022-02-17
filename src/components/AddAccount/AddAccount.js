import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_NEW_ACCOUNT_ACCTION } from '../../redux/ActionCreators/actionCreators';

export default function AddAccount() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newAcc, setNewAcc] = useState({ name: '', email: '', phone: '' })

    const onAdd = () => {
        dispatch(ADD_NEW_ACCOUNT_ACCTION(newAcc))
        navigate('/')
    }

    return (
        <div className="container">
            <h3 className='display-4 m-4'>Add Account</h3>
            <div className="row ">
                <div className="col-6 offset-3">
                    <input 
                        type="text" 
                        className='form-control mt-4' 
                        placeholder='name' 
                        onChange={e => {setNewAcc({...newAcc, name: e.target.value})}}
                    /><br />
                    <input 
                        type="text" 
                        className='form-control mt-4' 
                        placeholder='email' 
                        onChange={e => {setNewAcc({...newAcc, email: e.target.value})}}
                    /><br />
                    <input 
                        type="text" 
                        className='form-control mt-4' 
                        placeholder='phone' 
                        onChange={e => {setNewAcc({...newAcc, phone: e.target.value})}}
                    /><br />
                    <button onClick={onAdd} className='btn btn-info form-control'>Add</button>
                </div>
            </div>
        </div>
    )
}
