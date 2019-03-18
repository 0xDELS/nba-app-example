import React from 'react';
import '../articles.scss';
import moment from 'moment'

const PostData = (props) => {

    const formatDate = (date) => {
        return moment(date).format(' DD-MM-YYYY ')
    }

    return (
        <div className="articlePostData">
            <div>
                Date: <span>{formatDate(props.data.date)}</span>
            </div>
            <div>
                Author: <span>{props.data.author}</span>
            </div>
        </div>
    );
};

export default PostData;