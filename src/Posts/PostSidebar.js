import React from 'react'
import { Link } from "react-router-dom"

function PostSidebar({post}) {
    // ?name=foo

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button avatar">
                <Link to={ '/user/' + post.authorMeta.name }>
                    <img src={post.authorMeta.avatar} alt="" width='100%'/>
                </Link>
            </div>

            <div className="videoSidebar__button">
                <span className="material-icons"> favorite_border </span>
                <p>{post.diggCount}</p>
            </div>

            <div className="videoSidebar__button">
                <span className="material-icons"> message </span>
                <p>{post.commentCount}</p>
            </div>

            <div className="videoSidebar__button">
                <span className="material-icons"> share </span>
                <p>{post.shareCount}</p>
            </div>
        </div>
    )
}

export default PostSidebar