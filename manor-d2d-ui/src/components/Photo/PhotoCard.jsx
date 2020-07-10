import React from 'react';
import {
    Card,
    CardMedia
} from '@material-ui/core';

const PhotoCard = ({ photo }) => (
    <Card>
        <CardMedia
            component="img"
            alt={photo.title}
            image={photo.image}
            title={photo.title}
        />
    </Card>
)

export default PhotoCard;