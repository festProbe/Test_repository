    import React from "react";
    import s from './Post.module.css'

    const Post = (props) => {
        console.log(props.message);
        return (
            <div className={s.item}>
                <img src="https://images.alphacoders.com/711/thumb-350-711581.jpg" alt=""/>
                {props.message};
                <div>
                    <span>like</span>
                    <span>repost</span>
                </div>
            </div>
        )
    }

    export default Post;