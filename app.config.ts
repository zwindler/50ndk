export default defineAppConfig({
    logo: '/images/cover.png',

    url: 'https://50ndk.zwindler.fr/',

    theme: 'mistral',

    // If you only have one author, you can set the author here
    // It will be used as the default author for all posts AND as the general logo/description/socials for the website
    name: '50 nuances de Kubernetes',
    avatar: '/images/avatar.jpg',

    // The description of the blog if any
    description:
        'Denis Germain, auteur du livre "50 nuances de Kubernetes", est SRE le jour, blogger tech la nuit (https://blog.zwindler.fr) et membre organisateur des conférences Kubernetes Community Days France et BDX I/O entre les deux.',
    
    socials: {
        twitter: 'https://x.com/zwindler',
        mastodon: 'https://framapiaf.org/deck/@zwindler',
        youtube: 'https://peertube.zwindler.fr/',
        linkedin: 'https://www.linkedin.com/in/denis-germain/',
        github: 'https://github.com/zwindler',

        sharing_networks: ['facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype']
    },

    newsletter: {
        enabled: true,
        form_action: 'YOUR_NEWSLETTER_FORM_ACTION',
        provider: 'demo',
    },

    comments: {
        enabled: true,
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
            name: 'Denis Germain',
            description:
            'Je suis Site Reliability Engineer le jour, blogger tech la nuit sur blog.zwindler.fr et membre organisateur des conférences KCD France et BDX I/O entre les deux. Je me passionne pour l’infrastructure, comment l’automatiser et l’observer, mais surtout, partager ce que je découvre. J’aime aussi la science-fiction, courir (pas trop vite) et découvrir de nouveaux horizons.',
            avatar: '/images/avatar.jpg',
            socials: {
                twitter: 'https://x.com/zwindler',
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
})
