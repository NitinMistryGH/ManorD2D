import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';
import { routes } from '../__test-constants__/objectTestConstants';
import { BrowserRouter as Router } from 'react-router-dom';


describe('NavBar renders navigation options', () => {
    test('home', () => {
        render(
            <Router>
                <NavBar routes={routes} />
            </Router>);
        expect(document.getElementById('navbar-button-home').textContent).toBe('Home');
    });
    test('be a giver campaign', () => {
        render(
            <Router>
                <NavBar routes={routes} />
            </Router>);
        expect(document.getElementById('navbar-button-campaign').textContent).toBe('Be A Giver Campaign');
    });
    test('photos', () => {
        render(
            <Router>
                <NavBar routes={routes} />
            </Router>);
        expect(document.getElementById('navbar-button-photos').textContent).toBe('Photos');
    });
    test('videos', () => {
        render(
            <Router>
                <NavBar routes={routes} />
            </Router>);
        expect(document.getElementById('navbar-button-videos').textContent).toBe('Videos');
    });
});

describe('NavBar renders correctly', () => {
    test('site logo', () => {
        render(
            <Router>
                <NavBar routes={routes} />
            </Router>);
        expect(document.getElementById('navbar-image')).toBeDefined();
    });

    test('site title', () => {
        render(
            <Router>
                <NavBar routes={routes} />
            </Router>);
        expect(document.getElementById('navbar-site-title').textContent).toBe('Sankirtana Forever');
    });

    test('site subtitle', () => {
        render(
            <Router>
                <NavBar routes={routes} />
            </Router>);
        expect(document.getElementById('navbar-site-subtitle').textContent).toBe('Rise Above and Go Beyond [Marathon 2019]');
    });
});
