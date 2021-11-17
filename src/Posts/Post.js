import React from 'react'
import PostFooter from './PostFooter';
import PostSidebar from './PostSidebar';
import { useEffect, useRef } from "react";


function Post({post}) {
    const videoRef = useRef(null);

    useEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    if (videoRef.current) { videoRef.current.pause(); }
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });

    return (
        <div className="video">
            <video className="video__player" src={post.videoUrl} ref={videoRef} autoplay="true"/>
            <PostSidebar post={post}/>
            <PostFooter post={post}/>
        </div>
    )
}

export default Post    