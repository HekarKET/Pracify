import React , {useState} from 'react'


function Navbar() {
  const [menu, setmenu] = useState(false)
  const changeMenu = ()=>{
    setmenu(!menu)
    let logo = document.getElementById('nav-logo')
    let menuItem = document.getElementById('menu-item')
    if(menu){  
      logo.style.display = 'none'  
      menuItem.style.display = 'flex'
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    
    }
    else{
      logo.style.display = 'block'  
      menuItem.style.display = 'none'
      document.documentElement.style.overflow = "visible";
      document.body.style.overflow = "visible"
    }

  }
    return (
      <React.Fragment>
        <nav>
          
          <ul className='navbar '>
            <div className='logo' id='nav-logo'>organic</div>
            
              <ul className='menu-item' id = 'menu-item'>
                <li className='nav-item'> <a href="#">Home</a> </li>
                <li className='nav-item'> <a href="#">Product</a> </li>
                <li className='nav-item'> <a href="#">Blog</a> </li>
                <li className='nav-item'> <a href="#">About us</a> </li>
                <li className='nav-button'> <button>Contact</button></li>
              </ul>  
              <div className="burger" onClick={changeMenu}>
              <i className="fas fa-bars"></i>
              </div>        
          </ul>
        </nav>
      </React.Fragment>
    )
}

export default Navbar
