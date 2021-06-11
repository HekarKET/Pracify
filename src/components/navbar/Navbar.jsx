import React from 'react'

function Navbar() {
    return (
      <React.Fragment>
        <nav>
          <ul className='navbar'>
            <li className='logo'>organic</li>
            <li className='nav-item'> <a href="#">Home</a> </li>
            <li className='nav-item'> <a href="#">Product</a> </li>
            <li className='nav-item'> <a href="#">Blog</a> </li>
            <li className='nav-item'> <a href="#">About us</a> </li>
            <li className='nav-button'> <button>Contact</button></li>
          </ul>
        </nav>
      </React.Fragment>
    )
}

export default Navbar
