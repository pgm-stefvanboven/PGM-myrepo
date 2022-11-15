const navigation = [
    {
        name: 'Projecten',
        link: 'http://127.0.0.1:5500/pgm_1_opdracht_2_Van_Boven_Stef/app/index.html#',
        type: '_self',
    },
    {
        name: 'Graduaat Programmeren',
        link: 'https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren',
        type: '_blank',
    },
    {
        name: 'Programmeren 1',
        link: 'https://arteveldehogeschool.instructure.com/courses/22616',
        type: '_blank',
    },
]

const events = [
    {
        title: 'Interactieve workshops voor leerlingen laatste graad secundair onderwijs',
        link: 'https://www.arteveldehogeschool.be/dienstverlening/diensten-voor-scholen/winterlab',
    },
    {
        title: 'Workshops "Zeg het met 3D, Code, Kleur, Beeld en geluid"',
        link: 'https://ahsdevelopers.github.io/zeghetmetkleur/',
    },
    {
        title: 'Studie-informatiedagen (SID-ins): aanbod aan studie- en beroepsmogelijkheden na je secundair onderwijs',
        link: 'https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/sid-ins',
    },
    {
        title: 'Infodag zaterdag 11 maart 2023 (10:00 tot 17:00)',
        link: 'https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/infodagen',
    },
]

const projects = [
    {
        id: 'b3ad207b-ee8b-4f39-a4ac-de7b4b966b01',
        title: 'Dialectische Gedragstherapie (DGT)',
        synopsis: 'Webapp ter ondersteuning van Dialectische Gedragstherapie (DGT)',
        author: {
            name: "Charlotte Delvaux",
        },
        technologies: {
            id: 'ang1, njs1',
            name: 'Angular NestJS',
        },
        screenshots: [
            'images/delvauxcharlotte/screenshot_01.png', 'images/delvauxcharlotte/screenshot_02.png',
        ],
    },
    {
        id: '935dd4ee-ef73-4861-a43a-eeb2caedaa46',
        title: 'Buurtkajaks Gent',
        synopsis: 'Native mobile applicatie om kajaks te reserveren in Gent',
        author: {
            name: 'Dylan Cathelijn',
        },
        technologies: {
            id: 'rn1, fb1',
            name: 'React Native Firebase',
        },
        screenshots: [
            'images/cathelijndylan/screenshot_01.png', 'images/cathelijndylan/screenshot_02.png', 'images/cathelijndylan/screenshot_03.png', 'images/cathelijndylan/screenshot_04.png',
        ],
    },
    {
        id: '4104c54b-18a5-4dcf-930b-2687a5b09baa',
        title: 'Tekst.ai',
        synopsis: 'Een gebruiksvriendelijk en personaliseerbaar dashboard voor Tekst.ai',
        author: {
            name: 'Jan Deschacht',
        },
        technologies: {
            id: 'njs1, spi1',
            name: 'NextJS Strapi',
        },
        screenshots: [
            'images/deschachtjan/screenshot_01.png', 'images/deschachtjan/screenshot_02.png', 'images/deschachtjan/screenshot_03.png', 'images/deschachtjan/screenshot_04.png',
        ],
    },
    {
        id: '623274c0-00e4-44c7-bd62-0d1a90b9c5de',
        title: 'Virtual Closet',
        synopsis: 'Sociale applicatie om kleding (uit jouw kledingkast) te matchen tot een goede outfit door andere gebruikers',
        author: {
            name: 'Thabisa Dingani',
        },
        technologies: {
            id: 'rn1, fb1',
            name: 'React Native Firebase',
        },
        screenshots: [
            'images/dinganithabisa/screenshot_01.png', 'images/dinganithabisa/screenshot_02.png', 'images/dinganithabisa/screenshot_03.png',
        ],
    },
    {
        id: '422d8fea-cba9-4a2c-91d2-163d940ec7e2',
        title: 'Car expense',
        synopsis: 'Platform om kosten van een auto te bijhouden inclusief speech-to-text',
        author: {
            name: 'Jamie-Lee Hart',
        },
        technologies: {
            id: 'rjs1, sb1',
            name: 'ReactJS Supabase',
        },
        screenshots: [
            'images/hartjamielee/screenshot_01.png', 'images/hartjamielee/screenshot_02.png', 'images/hartjamielee/screenshot_03.png',
        ],
    },
    {
        id: 'e7617984-923a-443d-910c-c4529d7395f3',
        title: 'Crypto Tracker',
        synopsis: 'Mobiele (native) applicatie voor het tracken van cryptomunten',
        author: {
            name: 'Aiden Soufi',
        },
        technologies: {
            id: 'rn1, fb1',
            name: 'React Native Firebase',
        },
        screenshots: [
            'images/soufiaiden/screenshot_01.png', 'images/soufiaiden/screenshot_02.png', 'images/soufiaiden/screenshot_03.png',
        ],
    },
    {
        id: '4ea74e00-cb45-4dbd-901e-f36b2d377488',
        title: 'La Macarena',
        synopsis: 'Website voor La Macarena, een organisatie die verschillende activeiten organiseert voor jonge vrouwen',
        author: {
            name: 'Nicolas Cnudde',
        },
        technologies: {
            id: 'vjs1, ghql1',
            name: 'VueJS GraphQL',
        },
        screenshots: [
            'images/cnuddenicolas/screenshot_01.png', 'images/cnuddenicolas/screenshot_02.png', 'images/cnuddenicolas/screenshot_03.png',
        ],
    },
    {
        id: 'a5ff4ff1-f970-48dc-9fe6-187a5ef4ecb4',
        title: 'TorchLight',
        synopsis: 'Mobiele applicatie om characters bij te houden tijdens een Dungeons and Dragons spel',
        author: {
            name: 'Bram Vandenbussche',
        },
        technologies: {
            id: 'ang1, fb1',
            name: 'Angular Firebase',
        },
        screenshots: [
            'images/vandenbusschebram/screenshot_01.png', 'images/vandenbusschebram/screenshot_02.png', 'images/vandenbusschebram/screenshot_03.png', 'images/vandenbusschebram/screenshot_04.png',
        ],
    },
    {
        id: '859601d6-b927-4fc6-ac6b-c7352b23de61',
        title: 'DiscoverSound',
        synopsis: 'Webapplicatie waarbij je willekeurige nummers te horen krijgt van onbekende bands',
        author: {
            name: 'Bram Criel',
        },
        technologies: {
            id: 'rjs1, fb1',
            name: 'ReactJS Firebase',
        },
        screenshots: [
            'images/crielbram/screenshot_01.png', 'images/crielbram/screenshot_02.png', 'images/crielbram/screenshot_03.png',
        ],
    },
]


const detail = [
    {

    }
]

const socials = [
    {
        website: 'http://www.pgm.gent',
        linkedin: 'https://www.linkedin.com/company/28878545/admin/',
        facebook: 'https://www.facebook.com/Programmeren.ahs',
        instagram: 'https://www.instagram.com/programmeren.ahs/',
        youtube: 'https://www.youtube.com/channel/UCHly8VZULSMWEmvbPJNVtFA',
    },
]