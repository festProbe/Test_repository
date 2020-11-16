import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://images.alphacoders.com/711/thumb-350-711581.jpg" alt=""/>
            {props.message}
            <div>
                <span>{'Likes ' + props.likesCount + ' '}</span>
                <span>{'Reposts ' + props.repostsCount} </span>
            </div>
        </div>
    )
}

export default Post;