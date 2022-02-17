import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { EDIT_ACCOUNT_ACTION } from '../../redux/ActionCreators/actionCreators';

export default function EditAccount() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const stateAccounts = useSelector((state) => state.accounts)

    const [editedAcc, setEditedAcc] = useState({name:'', email:'', phone:''})

    useEffect(()=> {
        setEditedAcc(stateAccounts.filter(account => account.id == id)[0])
    },[])

    // console.log(editedAcc);

    const onEdit = () => {
        dispatch(EDIT_ACCOUNT_ACTION(editedAcc))
        navigate('/')
    }

    return (
        <div className="container">
            <h3 className='display-4 m-4'>Edit Account</h3>
            <div className="row ">
                <div className="col-6 offset-3">
                    <input
                        type="text"
                        className='form-control mt-4'
                        onChange={e => {setEditedAcc({...editedAcc, name: e.target.value})}}
                        value={editedAcc.name}
                    /><br />
                    <input
                        type="text"
                        className='form-control mt-4'
                        onChange={e => {setEditedAcc({...editedAcc, email: e.target.value})}}
                        value={editedAcc.email}
                    /><br />
                    <input
                        type="text"
                        className='form-control mt-4'
                        onChange={e => {setEditedAcc({...editedAcc, phone: e.target.value})}}
                        value={editedAcc.phone}
                    /><br />
                    <button onClick={onEdit} className='btn btn-info form-control'>Edit</button>
                </div>
            </div>
        </div>
    )
}
