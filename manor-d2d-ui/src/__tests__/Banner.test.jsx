import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../components/Banner/Banner';

describe('Banner renders correctly', () => {
    test('title', () => {
        render(
            <Banner
                currentPage={{ title: 'Page Title', link: '/', breadcrumb: 'page' }}
            />
        );
        expect(document.getElementById('banner-title').textContent).toBe(
            'Page Title'
        );
    });
    test('breadcrumbs Home', () => {
        render(
            <Banner
                currentPage={{ title: 'Page Title', link: '/', breadcrumb: 'page' }}
            />
        );
        expect(document.getElementById('banner-breadcrumbs-home').textContent).toBe(
            'Home'
        );
    });

    test('breadcrumbs Page', () => {
        render(
            <Banner
                currentPage={{ title: 'Page Title', link: '/', breadcrumb: 'page' }}
            />
        );
        expect(document.getElementById('banner-breadcrumbs-page').textContent).toBe(
            'page'
        );
    });

    test('breadcrumbs', () => {
        render(
            <Banner
                currentPage={{ title: 'Page Title', link: '/', breadcrumb: 'page' }}
            />
        );
        expect(document.getElementById('banner-breadcrumbs').textContent).toBe(
            'Home/page'
        );
    });
});
