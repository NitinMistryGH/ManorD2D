import React from 'react';
import {
    Card,
    CardMedia
} from '@material-ui/core';
import PropTypes from 'prop-types';

const PhotoCard = ({ photo, styles }) => (
    <Card className={styles.card} raised id='photocard-card'>
        <a href={photo.image} target='_parent' id='photocard-link'>
            <CardMedia
                id='photocard-media'
                className={styles.photo}
                component='img'
                alt={photo.title}
                image={photo.image}
                title={photo.title}
            />
        </a>
    </Card>
);

export default PhotoCard;

PhotoCard.defaultProps = {};
PhotoCard.propTypes = {
    photo: PropTypes.instanceOf(Object).isRequired,
    styles: PropTypes.instanceOf(Object).isRequired
};
