import Home from '../components/Home/Home';

export const routes = [
    {
        key: 'home',
        title: 'Database of Streets Visited',
        link: '/',
        breadcrumb: 'Sankirtana Forever',
        component: Home
    },
    {
        key: 'campaign',
        title: 'Be A Giver Campaign',
        link: '/be-a-giver-campaign',
        breadcrumb: 'Be A Giver Campaign',
        component: Home
    },
    {
        key: 'photos',
        title: 'Photos',
        link: '/photos',
        breadcrumb: 'Photos',
        component: Home
    },
    {
        key: 'videos',
        title: 'Videos',
        link: '/videos',
        breadcrumb: 'Videos',
        component: Home
    }
];