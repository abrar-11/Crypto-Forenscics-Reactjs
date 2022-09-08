import React from 'react'
import {Link} from "react-router-dom"
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
const Header = () => {
  return (
    <div className="container flex ai-c jc-sb header">
        <div className="logo">
            <Link to="/" id='logo'>Cryptonion <AllInclusiveIcon className="logoIcon"/> </Link>
        </div>
     
    </div>
  )
}

export default Header