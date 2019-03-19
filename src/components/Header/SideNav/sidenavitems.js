import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faPlay } from '@fortawesome/free-solid-svg-icons'
import './sidenav.scss'
import { firebase } from '../../../firebase'

library.add(faHome, faNewspaper, faPlay)

const SideNavItems = (props) => {

    console.log(props)

    const items = [
        {
            type: 'option',
            icon: 'home',
            text: 'Home',
            link: '/',
            login: ''
        },
        {
            type: 'option',
            icon: 'newspaper',
            text: 'News',
            link: '/news',
            login: ''
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Videos',
            link: '/videos',
            login: ''
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Dashboard',
            link: '/dashboard',
            login: false
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Sign In',
            link: '/sign-in',
            login: true
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Sign Out',
            link: '/sign-out',
            login: false
        }
    ]

    const element = (item, i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesomeIcon icon={item.icon} />
                {item.text}
            </Link>
        </div>
    )

    const restricted = (item, i) => {
        let template = null

        if(props.user === null && item.login === true){
            template = element(item, i)
        }

        if(props.user !== null && !item.login) {
            if(item.link === '/sign-out'){
                template = (
                    <div key={i} className={item.type} onClick={() => {
                        firebase.auth().signOut()
                        .then(() => {
                            props.history.push('/')
                        })
                    }}>
                        <FontAwesomeIcon icon={item.icon} />
                        {item.text}
                    </div>
                )
            } else {
                template = element(item,i)
            }
        }

        return template
    }

    const showItems = () => {
        return items.map( (item, i) => {
            return item.login !== '' ?
                restricted(item, i)
            :
                element(item, i)
        } )
    }
    return (
        <div>
            {showItems()}
        </div>

    )
}

export default withRouter(SideNavItems)