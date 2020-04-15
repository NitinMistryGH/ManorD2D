import React from 'react';
import {render} from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar renders navigation options', () => {
    test('home', () => {
        render(<NavBar />);
        expect(document.getElementById("navbar-button-home").textContent).toBe("Home");
    })
    test('be a giver campaign', () => {
        render(<NavBar />);
        expect(document.getElementById("navbar-button-campaign").textContent).toBe("Be A Giver Campaign");
    })
    test('photos', () => {
        render(<NavBar />);
        expect(document.getElementById("navbar-button-photos").textContent).toBe("Photos");
    })
    test('videos', () => {
        render(<NavBar />);
        expect(document.getElementById("navbar-button-videos").textContent).toBe("Videos");
    })
})
