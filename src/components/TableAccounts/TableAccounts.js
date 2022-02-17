import React from 'react'
import { useSelector } from 'react-redux'
import Account from '../Account/Account';

export default function TableAccounts() {

    const stateAccounts = useSelector((state) => state.accounts)

    const allAcc = stateAccounts.map(account => {
        return (
            <Account account={account} key={account.id} />
        )
    })

    return (
        <div className="container">
            <h1 className='display-4 m-4'>Accounts</h1>
            <div className="row">
                <div className="col-10 offset-1">
                    <table className='table text-center'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allAcc}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
