import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBarMenu from '../components/NavBar/NavBarMenu';
import { routes } from '../__test-constants__/objectTestConstants';

const styles = {
    menu: 'string',
    menuItem: 'string'
};

const handleClose = () => {};

describe('NavBar Menu Renders Correctly', () => {
    test('Database of Streets', () => {
        render(
            <Router>
                <NavBarMenu
                    styles={styles}
                    open
                    navOptions={routes}
                    handleClose={handleClose}
                />
            </Router>
        );
        expect(document.getElementById('navbar-menu-home').textContent).toBe(
            'Home'
        );
    });
    test('Be A Giver', () => {
        render(
            <Router>
                <NavBarMenu
                    styles={styles}
                    open
                    navOptions={routes}
                    handleClose={handleClose}
                />
            </Router>
        );
        expect(document.getElementById('navbar-menu-campaign').textContent).toBe(
            'Be A Giver Campaign'
        );
    });
    test('Photos', () => {
        render(
            <Router>
                <NavBarMenu
                    styles={styles}
                    open
                    navOptions={routes}
                    handleClose={handleClose}
                />
            </Router>
        );
        expect(document.getElementById('navbar-menu-photos').textContent).toBe(
            'Photos'
        );
    });
    test('Videos', () => {
        render(
            <Router>
                <NavBarMenu
                    styles={styles}
                    open
                    navOptions={routes}
                    handleClose={handleClose}
                />
            </Router>
        );
        expect(document.getElementById('navbar-menu-videos').textContent).toBe(
            'Videos'
        );
    });
});
