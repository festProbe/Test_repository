import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let MyPosts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                             repostsCount={p.repostsCount}/>)

    return (
        <div>
            My posts
            <div>
                <textarea name=""></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {MyPosts}
            </div>
        </div>);
}

export default MyPosts;