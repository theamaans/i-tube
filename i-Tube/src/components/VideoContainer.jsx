import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import { VideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

export const VideoContainer = () => {
    const [video, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        setVideos(json.items);
    }
    return (
        <div className='flex flex-wrap'>
            {video.map(video => (
                <Link to={"/watch?v="+video.id} key={video.id}>
                    <VideoCard  info={video} /></Link>))}
        </div>
    )
}
