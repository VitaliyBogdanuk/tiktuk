import React from 'react'
import { Link } from 'react-router-dom'

function PostFooter({post}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
            <h3 className="authorNickName"><Link to={ '/user/' + post.authorMeta.name }>@{post.authorMeta.nickName}</Link></h3>
            <p className="videoFooter__description">{post.text}</p>
            <div className="videoFooter__ticker">
                <span className="material-icons videoFooter__icon"> music_note </span>
                <marquee>{post.musicMeta.musicName}</marquee>
            </div>
            </div>
            <img
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
            className="videoFooter__record"
            />
        </div>
    )
}

export default PostFooter