import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import { routes } from '../__test-constants__/objectTestConstants';

describe('Renders PageWrapper Correctly', () => {
    test('renders children', () => {
        render(
            <Router>
                <PageWrapper routes={routes} />
            </Router>
        );

        expect(document.getElementById('page-wrapper-component').textContent).toBe(
            'Home'
        );
    });
});
