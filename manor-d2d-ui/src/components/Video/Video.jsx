import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';
import { VideoList } from './VideoList';
import VideoCard from './VideoCard';
const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        justifyContent: 'center'
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: "1 0 auto"
    },
    controls: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    },
    icon: {
        height: 38,
        width: 38
    }
}))
const Video = () => {
    const styles = useStyles();
    return (
        <Grid container spacing={5} id='video-grid-container'>
            {
                VideoList.map(video => (
                    <Grid unit key={`video-${video.id}`}>
                    <VideoCard
                        key={`video-${video.id}`}
                        styles={styles}
                        video={video}
                    />
                    </Grid>
                ))
            }
</Grid>
    )
}

export default Video;