import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('renders App Components', () => {
    test('renders footer', () => {
        render(
            <Router>
                <App />
            </Router>
        );
        expect(document.getElementById('footer-component')).toBeDefined();
    });
    test('renders navbar', () => {
        render(
            <Router>
                <App />
            </Router>
        );
        expect(document.getElementById('navbar-component')).toBeDefined();
    });
    test('renders banner', () => {
        render(
            <Router>
                <App />
            </Router>
        );
        expect(document.getElementById('banner-component')).toBeDefined();
    });

    test('renders page wrapper', () => {
        render(
            <Router>
                <App />
            </Router>
        );
        expect(document.getElementById('page-wrapper-component')).toBeDefined();
    });
});
