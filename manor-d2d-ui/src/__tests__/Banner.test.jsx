import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../components/Banner/Banner';
import { routes } from '../__test-constants__/objectTestConstants';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Banner renders correctly', () => {
    test('title', () => {
        render(
            <Router>
                <Banner routes={routes} />
            </Router>
        );
        expect(document.getElementById('banner-title').textContent).toBe(
            'Database of Streets Visited'
        );
    });
    test('breadcrumbs Home', () => {
        render(
            <Router>
                <Banner routes={routes} />
            </Router>
        );
        expect(document.getElementById('banner-breadcrumbs-home').textContent).toBe(
            'Home'
        );
    });

    test('breadcrumbs', () => {
        render(
            <Router>
                <Banner routes={routes} />
            </Router>
        );
        expect(document.getElementById('banner-breadcrumbs').textContent).toBe(
            'Home/Sankirtana Forever'
        );
    });
});
