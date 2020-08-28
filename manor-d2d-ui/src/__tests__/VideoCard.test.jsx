import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VideoCard from '../components/Video/VideoCard';

const video = {
    id: 'manor',
    title: 'Bhaktivedanta Manor',
    subtitle: 'Book Marathon 2019',
    link: 'bnlb2XEtc3k'
};

const styles = {
    card: 'string',
    details: 'string',
    content: 'string',
    icon: 'string'
};

describe('VideoCard renders correctly', () => {
    test('title', () => {
        render(<VideoCard video={video} styles={styles} />);

        expect(document.getElementById('videocard-title-manor').textContent).toBe(video.title);
    });
    test('subtitle', () => {
        render(<VideoCard video={video} styles={styles} />);

        expect(document.getElementById('videocard-subtitle-manor').textContent).toBe(video.subtitle);
    });
    test('video', () => {
        render(<VideoCard video={video} styles={styles} />);

        expect(document.getElementById('videocard-video-manor')).toBeDefined();
    });
    test('play', () => {
        render(<VideoCard video={video} styles={styles} />);

        expect(document.getElementById('videocard-play-manor')).toBeDefined();
    });
    test('pause', () => {
        render(<VideoCard video={video} styles={styles} />);

        fireEvent.click(document.getElementById('videocard-play-manor'));

        expect(document.getElementById('videocard-pause-manor')).toBeDefined();
    });
});
