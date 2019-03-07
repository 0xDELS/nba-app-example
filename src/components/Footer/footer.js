import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

import { CURRENT_YEAR } from '../../config'

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" className="logo">
                <img alt="NBA Logo" src="/images/nba_logo.png"/>
            </Link>
            <div className="copyright">
                @NBA {CURRENT_YEAR} All Rights Reverved.
            </div>
        </div>
    )
}

export default Footer