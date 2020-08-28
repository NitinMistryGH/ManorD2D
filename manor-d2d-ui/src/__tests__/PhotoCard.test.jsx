import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PhotoCard from '../components/Photo/PhotoCard';

const photo = {
    image: 'http://localhost/image',
    title: 'Image Title'
};
const styles = {
    card: 'string',
    photo: 'string'
};
describe('renders PhotoCard component correctly', () => {
    test('card', () => {
        render(
            <Router>
                <PhotoCard photo={photo} styles={styles} />
            </Router>
        );
        expect(document.getElementById('photocard-card')).toBeDefined();
    });
    test('card media', () => {
        render(
            <Router>
                <PhotoCard photo={photo} styles={styles} />
            </Router>
        );
        expect(document.getElementById('photocard-media').title).toBe(photo.title);
    });
    test('link', () => {
        render(
            <Router>
                <PhotoCard photo={photo} styles={styles} />
            </Router>
        );
        expect(document.getElementById('photocard-link').href).toBe(photo.image);
    });
});
