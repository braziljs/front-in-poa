module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Front in Poa 2013",
      description: "O Front in que vai mudar o seu jeito de ver o front end!",
      date: "30 de Novembro",
      venue: "Senac",
      address: "Rua Cel. Genuíno, 130",
      neighborhood: "Centro",
      city: "Porto Alegre",
      state: "RS"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
      text: "Inscreva-se",
      link: "http://www.eventick.com.br/frontinpoa-2013"
    },

    // Site info
    site: {
      theme: "front-in-poa",
      url: "http://frontinpoa.com.br",
      googleanalytics: "UA-45100553-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'collaborate',
      'about',
      // 'speakers',
      // 'schedule',
      'location',
      'organizers',
      'sponsors'
    ],

    navigation: [
      'home',
      'about',
      // 'speakers',
      // 'schedule',
      'location',
      'sponsors'
    ],

    // Labels which you can translate to other languages
    labels: {
      home: "Home",
      about: "Sobre",
      speakers: "Palestrantes",
      schedule: "Programação",
      location: "Local",
      organizers: "Organizadores",
      sponsors: "Patrocínio"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Linus Torvalds",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
        }
      },
      {
        name: "Bill Gates",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Microsoft",
        link: {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Chuck Norris",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Steve Jobs",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Cure Studio Design",
        logo: "images/cure.svg",
        url: "http://curestudio.com.br"
      },
      {
        name: "Grifo",
        logo: "images/grifo.svg",
        url: "http://gri.fo"
      },
      {
        name: "Senac",
        logo: "images/senac.svg",
        url: "http://www.senac.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Abradi RS",
        logo: "images/abradi.svg",
        url: "http://www.abradirs.com.br"
      },
      {
        name: "Codeminer42",
        logo: "images/codeminer.svg",
        url: "http://Codeminer42.com.br"
      }
    ]
  }
};
