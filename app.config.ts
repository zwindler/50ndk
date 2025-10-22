export default defineAppConfig({
    logo: '/images/50ndk-logo-2.png',

    url: 'https://50ndk.zwindler.fr/',

    theme: 'mistral',

    // The name of the blog itself
    name: 'Kubernetes : Kubernetes : 50 solutions pour les postes de dev et les clusters de prod',
    avatar: '/images/avatar.jpg',
    // The description of the blog if any
    description: 'Site de promotion du livre "Kubernetes : 50 solutions pour les postes de développement et les clusters de production"',

    analytics: {
        providers: [ {
            provider: 'blogtally',
            code: '95f3a3d0-323f-47d5-965c-e6e7e6207273'
        }]
    },
    socials: {
        bluesky: 'https://bsky.app/profile/zwindler.fr',
        mastodon: 'https://framapiaf.org/deck/@zwindler',
        youtube: 'https://peertube.zwindler.fr/',
        linkedin: 'https://www.linkedin.com/in/denis-germain/',
        github: 'https://github.com/zwindler',
    },

    comments: {
        enabled: false,
        hyvor_talk: {
            website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    table_of_contents: false,

    // the list of authors
    // the default author will be used for all posts if no author is specified
    // and the mistral theme use the default author for the main page
    authors: [
        {
            username: 'zwindler',
            default: true,
            name: 'Denis Germain',
            description:
            'Denis Germain, auteur du livre "50 nuances de Kubernetes", est SRE le jour, blogger tech la nuit (https://blog.zwindler.fr) et membre organisateur des conférences Kubernetes Community Days France et BDX I/O entre les deux.',
            avatar: '/images/avatar.jpg',
            socials: {
                mastodon: 'https://framapiaf.org/deck/@zwindler',
                youtube: 'https://peertube.zwindler.fr/',
                linkedin: 'https://www.linkedin.com/in/denis-germain/',
                github: 'https://github.com/zwindler',
            },
        },
    ],

    menu: () => [
        { name: 'Home', path: '/' },
        { name: 'Archives', path: '/archives' },
    ],


    robots: [
        {
            UserAgent: '*',
            Allow: ['/'],
        },
    ],

})
