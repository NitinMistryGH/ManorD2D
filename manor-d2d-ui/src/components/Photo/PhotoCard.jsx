import React from 'react';
import {
    Card,
    CardMedia
} from '@material-ui/core';

const PhotoCard = ({ photo, styles }) => (
    <Card className={styles.card} raised>
        <a href={photo.image} target="_parent">
        <CardMedia
            className={styles.photo}
            component="img"
            alt={photo.title}
            image={photo.image}
            title={photo.title}
        />
        </a>
    </Card>
)

export default PhotoCard;