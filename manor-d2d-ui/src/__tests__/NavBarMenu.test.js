import React from 'react';
import {render} from '@testing-library/react';
import NavBarMenu from '../components/NavBar/NavBarMenu';

const styles = {
    menu: 'string',
    menuItem: 'string'
}

const handleClose = () => {
    console.log("do stuff")
}

const navOptions = [{key: "option1", name: "Option 1"}, {key: "option2", name: "Option 2"}]
describe("NavBar Menu Renders Correctly", () => {
    test('option 1', () => {
        render(<NavBarMenu styles={styles} open={true} navOptions={navOptions} handleClose={handleClose}/>);
        expect(document.getElementById("navbar-menu-option1").textContent).toBe("Option 1");
    })
    test('option 2', () => {
        render(<NavBarMenu styles={styles} open={true} navOptions={navOptions} handleClose={handleClose}/>);
        expect(document.getElementById("navbar-menu-option2").textContent).toBe("Option 2");
    })

})