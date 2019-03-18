import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import moment from 'moment'

import './cardinfo.scss'

library.add(faClock)

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.teamId === team
        })
        if (data){
            return data.name
        }
    }

    const formatDate = (date) => {
        return moment(date).format(' DD-MM-YYYY ')
    }

    return (
        <div className="cardInfo">
            <span className="teamName">
                {teamName(props.teams, props.team)}
            </span>
            <span className="date">
                <FontAwesomeIcon icon="clock"/>
                {formatDate(props.date)}
            </span>
        </div>
    );
};

export default CardInfo;