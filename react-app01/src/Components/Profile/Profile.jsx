import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileBackground from "./ProfileBackground/ProfileBackground";
import ProfileDescription from "./ProfileDescription/ProfileDescription";


const Profile = (props) => {
    return (
        <article>
            <div className={s.profile}>
                <ProfileBackground/>
                <div className={s.content}>
                    <ProfileDescription/>
                    <MyPosts posts={props.posts}/>
                </div>
            </div>
        </article>
    );
}

export default Profile;