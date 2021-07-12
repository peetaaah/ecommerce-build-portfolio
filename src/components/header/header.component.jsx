import React from "react";
import {Link} from 'react-router-dom';


import { ReactComponent as Logo } from '../../assets/logo/crown.svg';

// note! 
import "./header.styles.scss";

const Header = () => (
<div className='header'>
    <Link className='logo-container' to='/'>
    <Logo className='logo' />
    </Link>
<div className='options'>
    <Link className='option' to='/shop'>
       <b>SHOP</b>
    </Link>
    <Link className='option' to='/contact'>
        <b>CONTACT</b>
    </Link>
</div>
</div>

);

export default Header;
