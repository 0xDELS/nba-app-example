import React, { Component } from 'react';
import '../../articles.scss'
import Header from './header'
import VideosRelated from '../../../Widgets/VideosList/VideosRelated/videosrelated';
import { firebaseDB, firebaseTeams, firebaseLooper, firebaseVideos } from '../../../../firebase'

class VideoArticle extends Component {

    state = {
        article:[],
        team:[],
        teams:[],
        related:[]
    }

    getRelated = () => {
        firebaseTeams.once('value')
        .then((snap) => {
            const teams = firebaseLooper(snap)
            firebaseVideos.orderByChild('team').equalTo(this.state.article.team).limitToFirst(3).once('value')
            .then((snap) => {
                const related = firebaseLooper(snap)
                this.setState({teams, related})
            })
        })
    }

    componentWillMount() {
        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
        .then((snapshot) => {
            let article = snapshot.val()
            firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value')
            .then((snapshot) => {
                const team = firebaseLooper(snapshot)
                this.setState({
                    article,
                    team
                })
            })
        })
        this.getRelated()
    }

    render() {
        const article = this.state.article
        const team = this.state.team

        return (
            <div>
                <Header teamData={team[0]}/>
                <div className="videoWrapper">
                    <h1>{article.title}</h1>
                    <iframe title="videoplayer" width="100%" height="300px" src={`https://www.youtube.com/embed/${article.url}`} />
                </div>
                <VideosRelated data={this.state.related} teams={this.state.teams}/>
            </div>
        );
    }
}

export default VideoArticle;