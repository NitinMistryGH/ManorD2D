import React from 'react';
import { render } from '@testing-library/react';

import Video from '../components/Video/Video';

describe('Video renders correctly', () => {
    test('video - manor', () => {
        render(<Video />);

        expect(document.getElementById('video-manor')).toBeDefined();
    });
});
