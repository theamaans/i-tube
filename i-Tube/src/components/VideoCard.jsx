import React from 'react';

export const VideoCard = ({ info }) => {
    // Check if info is undefined
    if (!info) {
        return <div>No information available</div>;
    }

    // Destructure snippet and statistics with default values
    const { snippet = {}, statistics = {} } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 w-72 shadow-lg'>
            <img className='rounded-lg' src={thumbnails?.medium?.url} alt={title} />
            <ul>
                <li className='font-bold py-2'> {title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}views</li>
            </ul>
           
        </div>
    );
};
