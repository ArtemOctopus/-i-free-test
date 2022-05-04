import React, { useRef, useState } from 'react'
import './App.scss';

import ReactPlayer from 'react-player'
import Controller from './components/controller'
import PlayList from './components/play-list'

import screenfull from 'screenfull'

const videos = [
  {
    url: 'https://youtu.be/idbmk8QSeKI',
    preview: 'https://i.ytimg.com/vi/3RI5EGNOVL8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJ8Jay3Zvb55tc7punWkYjrmMvOQ',
    title: 'Ритуал посвящения в мафию',
    channel: 'SopranosRU',
    views: '131 тыс.',
    date: '12 лет'
  },
  {
    url: 'https://youtu.be/yw8Y75I35g8',
    preview: 'https://i.ytimg.com/vi/yw8Y75I35g8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAHh5TwhYrMkpLwo5mGtPRNZ8c8w',
    title: 'РЕЦЕПТ БЕСТСЕЛЛЕРА || «Код Да Винчи»',
    channel: 'PunkMonk',
    views: '33 тыс',
    date: '3 недели'
  },
  {
    url: 'https://youtu.be/dmaAVT8SseE',
    preview: 'https://i.ytimg.com/vi/dmaAVT8SseE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDX3TlcEU7hmMykO4qpkPDKqc7VIw',
    title: 'И только мне показалось,что я .....',
    channel: 'MrDanteActay',
    views: '294 тыс.',
    date: '8 лет'
  },
  {
    url: 'https://youtu.be/idbmk8QSeKI',
    preview: 'https://i.ytimg.com/vi/3RI5EGNOVL8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJ8Jay3Zvb55tc7punWkYjrmMvOQ',
    title: 'Ритуал посвящения в мафию',
    channel: 'SopranosRU',
    views: '131 тыс.',
    date: '12 лет'
  },
  {
    url: 'https://youtu.be/yw8Y75I35g8',
    preview: 'https://i.ytimg.com/vi/yw8Y75I35g8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAHh5TwhYrMkpLwo5mGtPRNZ8c8w',
    title: 'РЕЦЕПТ БЕСТСЕЛЛЕРА || «Код Да Винчи»',
    channel: 'PunkMonk',
    views: '33 тыс',
    date: '3 недели'
  },
  {
    url: 'https://youtu.be/dmaAVT8SseE',
    preview: 'https://i.ytimg.com/vi/dmaAVT8SseE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDX3TlcEU7hmMykO4qpkPDKqc7VIw',
    title: 'И только мне показалось,что я .....',
    channel: 'MrDanteActay',
    views: '294 тыс.',
    date: '8 лет'
  },
]

const App = () => {
  const [playerState, setPlayerState] = useState({
    ...videos[0],
    isPlay: false,
    isFullScreen: false,
    isTheather: false
  })

  const [isController, setIsController] = useState(false)

  const playerContainerRef = useRef(null)
  const playerRef = useRef(null)

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current)
    setPlayerState(prev => ({ ...prev, isFullScreen: prev.isFullScreen }))
  }

  const togglePlay = () => {
    setPlayerState(prev => ({ ...prev, isPlay: !prev.isPlay }))
  }

  const toggleTheather = () => {
    setPlayerState(prev => ({ ...prev, isTheather: !prev.isTheather }))

  }

  return (
    <div className={`player ${playerState.isTheather ? 'theather-mode' : ''}`}>
      <div className={`player__content ${playerState.isTheather ? 'player__content--theather-mode' : ''}`}>
        <div
          onMouseOver={() => setIsController(true)}
          onMouseLeave={() => setIsController(false)}
          ref={playerContainerRef}
          className={`player__wrapper ${playerState.isTheather ? 'player__wrapper--theather-mode' : ''}`}
        >
          <ReactPlayer
            playing={playerState.isPlay}
            height='100%'
            width='100%'
            ref={playerRef}
            url={playerState.url}
          />
          {isController && <Controller
            toggleFullScreen={toggleFullScreen}
            togglePlay={togglePlay}
            toggleTheather={toggleTheather}
          />}
        </div>
        <div>
          <div className="player__title">{playerState.title}</div>
          <div>{playerState.channel}</div>
          <div>{playerState.views} просмотров</div>
          <div>{playerState.date} назад</div>
        </div>
      </div>

      <div className="player__play-list">
        {videos.map(video => <PlayList setPlayerState={setPlayerState} key={video.url} video={video} />)}
      </div>
    </div>
  );
}

export default App;
