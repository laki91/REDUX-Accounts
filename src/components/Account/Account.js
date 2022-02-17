import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DELETE_ACCOUNT_ACTION } from '../../redux/ActionCreators/actionCreators'

export default function Account({ account }) {

    const dispatch = useDispatch()

    return (
        <>
            <tr>
                <td>{account.name}</td>
                <td>{account.email}</td>
                <td>{account.phone}</td>
                <td>
                    <Link to={'/edit/' + account.id} className='btn btn-warning btn-sm'>Edit</Link>
                    <button
                    className='btn btn-danger btn-sm ms-4'
                    onClick={() => {dispatch(DELETE_ACCOUNT_ACTION(account.id)) }}
                    >Delete</button>
                </td>
            </tr>
        </>
    )
}
