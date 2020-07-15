import React, { useState } from 'react';
import {
  Card, CardContent, Typography, IconButton
} from '@material-ui/core';
import {
  PlayArrow,
  Pause
} from '@material-ui/icons';
import YouTube from 'react-youtube';

const VideoCard = ({ video, styles }) => {
  const [isPaused, setIsPaused] = useState(true);

  const videoOptions = {
    width: '356',
    height: '200'
  }

  const addPlayEventListener = (event) => {
    const playButton = document.getElementById(`videocard-play-${video.id}`);
    playButton.addEventListener('click', () => play(event));

  }

  const addPauseEventListener = (event) => {
    const pauseButton = document.getElementById(`videocard-pause-${video.id}`);
    pauseButton.addEventListener('click', () => pause(event));
  }

  const play = (event) => {
    event.target.playVideo();
    setIsPaused(false);
    addPauseEventListener(event);
    
  };

  const pause = (event) => {
    event.target.pauseVideo();
    setIsPaused(true);
    addPlayEventListener(event);
  }


  return (
    <Card className={styles.card}>
      <div className={styles.details}>
        <CardContent className={styles.content}>
          <Typography component='h5' variant='h5'>
            {video.title}
          </Typography>
          <Typography component='subtitle2' variant='subtitle2'>
            {video.subtitle}
          </Typography>
          <YouTube
            videoId={video.link}
            id={`videocard-${video.id}`}
            opts={videoOptions}
            onPlay={play}
            onPause={pause}
            onReady={addPlayEventListener}
          />
        </CardContent>
        <div className={styles.controls}>
          <IconButton>
            {isPaused ?
              <PlayArrow id={`videocard-play-${video.id}`} className={styles.icon} />
              :
              <Pause id={`videocard-pause-${video.id}`} className={styles.icon} />
            }

          </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default VideoCard;