import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import SideNav from './SideNav/sidenav'

library.add(faBars)

const Header = (props) => {

    const logo = () => {
        return (
            <Link to="/" className="logo">
                <img alt="NBA Logo" src="/images/nba_logo.png"/>
            </Link>
        )
    }

    const navBars = () => {
        return (
            <div className="">
                <FontAwesomeIcon icon="bars"
                    onClick={props.onOpenNav}
                    style={{
                        color:'#dfdfdf',
                        padding: '10px',
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}
                />
            </div>
        )
    }


    return(
        <header className="header">
            <SideNav {...props}/>
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header