import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';

import { PhotoList } from './PhotoList';
import PhotoCard from './PhotoCard';

const useStyles = makeStyles(theme => ({
    photo: {
        width: 150,
        height: 150,
        margin: '5%'
    },
    card: {
        width: 'calc(150px + 10%)'
    }
}))


const Photo = ({ }) => {
    const styles = useStyles();

    return (
        <Grid container spacing={7}>
            {
                PhotoList.map(photo => (
                    <Grid item >
                        <PhotoCard
                            id={`photo-${photo.title}`}
                            key={`photo-${photo.title}`}
                            photo={photo}
                            styles={styles}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )

}

export default Photo;