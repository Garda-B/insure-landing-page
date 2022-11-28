import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import { useState } from 'react';


function Navigation() {

    const [menu, setMenu] = useState(true)

    const handleBurger = () => {

         setMenu(!menu)

    }

    const mobileNav = (
        <div className='mobilenav'>
        <ul >
        <li>HOW WE WORK</li>
        <li>BLOG</li>
        <li>ACCOUNT</li>
        <li>VIEW PLANS</li>
    </ul>
    </div>
    )

    return (

        <nav>
            <div className='logo'><img alt="logo" src={logo}></img></div>
         { menu ? <div onClick={handleBurger} className='hamburger'><img alt="menu" src={hamburger}></img></div> : 
         [<div onClick={handleBurger} className='close'><img alt="close" src={close}></img></div>,
            mobileNav]
         
         
         } 
            <ul className='desktopnav'>
                <li>HOW WE WORK</li>
                <li>BLOG</li>
                <li>ACCOUNT</li>
                <li>VIEW PLANS</li>
            </ul>
        </nav>
    )
}


export default Navigation;