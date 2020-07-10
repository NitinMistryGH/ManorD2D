import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {PhotoList} from './PhotoList';
import PhotoCard from './PhotoCard';

const useStyles = makeStyles(theme => ({

}))


const Photo = ({ }) => {
    const styles = useStyles();

    return (
        <div>
            {
                PhotoList.map(photo => (
                    <PhotoCard
                        id={`photo-${photo.title}`}
                        key={`photo-${photo.title}`}
                        photo={photo} />
                ))
            }
        </div>
    )

}

export default Photo;