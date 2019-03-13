import React, { Component } from 'react';
import VideosList from '../Widgets/VideosList/videoslist'

class VideosMain extends Component {
    render() {
        return (
            <div>
                <VideosList type="card" title={false} loadmore={true} start={0} amount={5}/>
            </div>
        );
    }
}

export default VideosMain;