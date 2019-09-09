import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

const Posts = ({posts, loading}) => {
    if(loading){
        return <CircularProgress/>
    }
    return(
        <ul className="App-list">
            {posts.map(post => (
                <li key={post.id}>
                {post.title}
                </li>
            ))}
        </ul>
    )
}

export default Posts;