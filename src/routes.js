import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/home'
import Layout from './components/hoc/Layout/layout'
import NewsArticle from './components/Articles/News/Post'
import VideoArticle from './components/Articles/Videos/Video'
import NewsList from './components/News/news'
import VideosMain from './components/Videos/VideosMain'
import SignIn from './components/SignIn/SignIn'
import Dashboard from './components/Dashboard/Dashboard'

const Routes = (props) => {  
    return (
        <Layout user={props.user}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news" exact component={NewsList} />
                <Route path="/videos" exact component={VideosMain} />
                <Route path="/articles/:id" exact component={NewsArticle} />
                <Route path="/videos/:id" exact component={VideoArticle} />
                <Route path="/sign-in" exact component={SignIn} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Layout>
    );
}

export default Routes;