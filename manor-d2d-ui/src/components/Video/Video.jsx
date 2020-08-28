import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';
import { VideoList } from './VideoList';
import VideoCard from './VideoCard';

const useStyles = makeStyles(() => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        margin: '3%'
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 38,
        width: 38
    },
    gridItem: {
        width: '50%'
    }
}));
const Video = () => {
    const styles = useStyles();
    return (
        <Grid container className={styles.grid} id='video-component'>
            {
                VideoList.map(video => (
                    <Grid
                        unit
                        id={`video-${video.id}`}
                        key={`video-${video.id}`}
                        className={styles.gridItem}>
                        <VideoCard
                            styles={styles}
                            video={video}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default Video;

Video.defaultProps = {};
Video.propTypes = {};
