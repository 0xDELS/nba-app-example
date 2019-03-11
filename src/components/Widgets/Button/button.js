import React from 'react'
import './button.scss'
import { Link } from 'react-router-dom'

const Button = (props) => {
    let template = null

    switch(props.type){
        case 'loadmore':
            template=(
                <div className="blue-btn" onClick={props.loadMore}>
                    {props.cta}
                </div>
            )
            break
        case 'linkTo':
            template = (
                <Link to={props.linkTo} className="blue-btn">
                    {props.cta}
                </Link>
            )
            break;
        default:
            template=null
    }

    return template
}

export default Button