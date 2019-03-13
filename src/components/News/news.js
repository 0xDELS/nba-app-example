import React, { Component } from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/newslist'

class News extends Component {
    render() {
        return (
            <div>
                <NewsSlider type="featured" start={0} amount={3} settings={{
                    dots: false
                }}/>
                <NewsList type="2columns" start={0} amount={3} loadMore={true}/>
            </div>
        );
    }
}

export default News;