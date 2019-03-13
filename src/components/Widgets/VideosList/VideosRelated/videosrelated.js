import React from 'react';
import '../videoslist.scss'
import VideoTemplate from '../videotemplate'

const VideosRelated = (props) => {
    return (
        <div className="relatedWrapper">
            <VideoTemplate data={props.data} teams={props.teams} />
        </div>
    );
};

export default VideosRelated;