import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import {
    Typography,
    Link
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    text: {
        color: grey[700],
        paddingBlockEnd: '2%'
    },
    link: {
        color: theme.palette.primary
    }
}));

const BeAGiver = () => {
    const styles = useStyles();
    return (
        <div id='beagiver-content'>
            <Typography
                className={styles.text}
                variant='body1'
                display='block'>
                This Prabhupada Marathon, join an international celebration of Giving - sign up for
                the Be A Giver Campaign!
            </Typography>
            <Typography
                className={styles.text}
                variant='body1'
                display='block'>
                Be A Giver is a celebration of giving. An International campaign being organised by
                the BBT Marketing, Communication and Innovation Department for Srila Prabhupada
                Marathon 2018.
            </Typography>
            <Typography
                className={styles.text}
                variant='body1'
                display='block'>
                One of our main goals is to unit the world as a team, to share best practices and
                inspiration and grow as the &quot;One World Team&quot; in the service of Srila
                Prabhupada. Our goal is to get at least 10,000 givers internationally.
            </Typography>
            <Typography
                className={styles.text}
                variant='body1'
                display='block'>
                What do I need to do?
                <br />
                Register as official &quot;Givers&quot; at
                {' '}
                <Link
                    href='www.prabhupadamarathon.com'
                    className={styles.link}
                    target='_blank'
                    rel='noopener'>
                    www.prabhupadamarathon.com
                </Link>
                <br />
                Share stories, pictures, videos using #BeaGiver and #PM18
            </Typography>
            <iframe
                id='beagiver-video'
                title='Be A Giver Prabhupada Marathon 2018'
                width='200'
                height='113'
                src='https://www.youtube.com/embed/VU2k4X1hsI4'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen />
        </div>
    );
};

export default BeAGiver;
