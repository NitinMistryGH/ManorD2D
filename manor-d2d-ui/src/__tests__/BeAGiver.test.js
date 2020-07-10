import React from 'react';
import BeAGiver from '../components/BeAGiver/BeAGiver';
import { render } from '@testing-library/react';

const styles = {
    text: 'string',
    link: 'string'
}

describe('Be A Giver Content renders correctly', () => {
    test('text content', () => {
        render(<BeAGiver  styles={styles}/>);

        expect(document.getElementById('beagiver-content').textContent).toContain('This Prabhupada Marathon, join an international celebration of Giving - sign up for the Be A Giver Campaign!')
    });
    test('video', () => {
        render(<BeAGiver  styles={styles}/>);

        expect(document.getElementById('beagiver-video').title).toEqual("Be A Giver Prabhupada Marathon 2018")
    })
})