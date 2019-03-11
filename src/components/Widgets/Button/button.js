import React from 'react'
import './button.scss'

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
        default:
            template=null
    }

    return template
}

export default Button