import React from 'react'
import { Link } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faPlay } from '@fortawesome/free-solid-svg-icons'

import './sidenav.scss'

library.add(faHome, faNewspaper, faPlay)

const SideNavItems = () => {

    

    const items = [
        {
            type: 'option',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: 'option',
            icon: 'newspaper',
            text: 'News',
            link: '/news'
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Sign In',
            link: '/sign-in'
        }
    ]

    const showItems = () => {
        return items.map( (item, i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesomeIcon icon={item.icon} />
                        {item.text}
                    </Link>
                </div>
            )
        } )
    }
    return (
        <div>
            {showItems()}
        </div>

    )
}

export default SideNavItems