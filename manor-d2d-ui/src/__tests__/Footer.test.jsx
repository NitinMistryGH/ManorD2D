import React from 'react';
import { render, fireEvent, findByTestId } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

describe('Renders Footer Correctly', () => {
    test('Footer Text', async () => {
        render(<Footer />);
        fireEvent.scroll(window, { target: { scrollY: 100 } });
        const footerText = await findByTestId(document, 'footer-text');
        expect(footerText.textContent).toBe(
            '| Founder Acharya: A.C. Bhaktivedanta Swami Prabhupada |'
        );
    });
});
