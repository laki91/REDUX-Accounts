import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <Link to='/' className='navbar-brand' >Accounts App</Link>
    <ul className='navbar-nav navbar-brand ms-auto'>
        <NavLink to='/'  className='nav-link'>Accounts</NavLink>
        <NavLink to='/add'  className='nav-link'>Add Account</NavLink>
    </ul>
</nav>
  )
}
