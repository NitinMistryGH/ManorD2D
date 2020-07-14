import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Photo from '../components/Photo/Photo';

describe('renders Photo component correctly', () => {
    test('Grid Container', () => {
        render(
            <Router>
                <Photo />
            </Router>
        );
        expect(document.getElementById('photo-grid-container')).toBeDefined();
    });
    test('First image', () => {
        render(
            <Router>
                <Photo />
            </Router>
        );
        expect(document.getElementById('photo-Marathon 1')).toBeDefined();
    });
});
