import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAccount from './components/AddAccount/AddAccount';
import EditAccount from './components/EditAccount/EditAccount';
import Navbar from './components/Navbar/Navbar';
import TableAccounts from './components/TableAccounts/TableAccounts';
import store from './redux/store'

export default function App() {


  return (
    <Provider store={store} >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<TableAccounts />} />
          <Route path='/add' element={<AddAccount />} />
          <Route path='/edit/:id' element={<EditAccount />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
