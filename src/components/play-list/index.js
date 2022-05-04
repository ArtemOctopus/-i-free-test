import React from 'react'

import './index.scss'

const PlayList = ({ video, setPlayerState }) => {
  const { preview, title, channel, views, date } = video
  return (
    <div className='play-list' onClick={() => setPlayerState(prev => ({ ...prev, ...video }))}>
      <img className='play-list__img' src={preview} />
      <div className='play-list__title'>{title}</div>
      <div>{channel}</div>
      <div>{views} просмотров</div>
      <div>{date} назад</div>
    </div>
  )

}

export default PlayList