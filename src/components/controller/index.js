import React from 'react'

import './index.scss'

import { Panorama, PlayArrow, Fullscreen } from '@mui/icons-material'

const Controller = ({ toggleFullScreen, togglePlay, toggleTheather }) => {

    return (
        <div className='controller'>
            <PlayArrow onClick={togglePlay} className='controller__icon' />
            <Panorama onClick={toggleTheather} className='controller__icon' />
            <Fullscreen onClick={toggleFullScreen} className='controller__icon' />
        </div>
    )

}

export default Controller