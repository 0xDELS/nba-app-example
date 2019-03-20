import React from 'react';
import { Switch } from 'react-router-dom'

import Home from './components/Home/home'
import Layout from './components/hoc/Layout/layout'
import NewsArticle from './components/Articles/News/Post'
import VideoArticle from './components/Articles/Videos/Video'
import NewsList from './components/News/news'
import VideosMain from './components/Videos/VideosMain'
import SignIn from './components/SignIn/SignIn'
import Dashboard from './components/Dashboard/Dashboard'
import PrivateRoutes from './components/AuthRoutes/privateRoutes'
import PublicRoutes from './components/AuthRoutes/publicRoutes'

const Routes = (props) => {  
    return (
        <Layout user={props.user}>
            <Switch>
                <PublicRoutes {...props} restriced={false} path="/" exact component={Home}/>
                <PublicRoutes {...props} restriced={false} path="/news" exact component={NewsList} />
                <PublicRoutes {...props} restriced={false} path="/videos" exact component={VideosMain} />
                <PublicRoutes {...props} restriced={false} path="/articles/:id" exact component={NewsArticle} />
                <PublicRoutes {...props} restriced={false} path="/videos/:id" exact component={VideoArticle} />
                <PublicRoutes {...props} restriced={true} path="/sign-in" exact component={SignIn} />
                <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Layout>
    );
}

export default Routes;