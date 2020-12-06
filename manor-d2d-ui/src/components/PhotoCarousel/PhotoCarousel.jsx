import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { PhotoList } from './PhotoList';


class PhotoCarousel extends React.Component {
    render() {
        return <ImageGallery
            items={PhotoList}
            showBullets={true}
            showPlayButton={false}
        />;
    }
}

export default PhotoCarousel;