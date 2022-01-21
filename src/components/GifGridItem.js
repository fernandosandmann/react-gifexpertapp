import React from 'react'
import 'animate.css'

export const GifGridItem = ( {url, title} ) => {
    
    return (
        <div className='card animate__animated animate__backInUp'>
            <img src={url} alt={title} />
            <p className='title'>{title}</p>
        </div>
    )
}
