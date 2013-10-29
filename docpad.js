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
      'speakers',
      // 'presenter',
      // 'schedule',
      'location',
      'organizers',
      'sponsors'
    ],

    navigation: [
      'home',
      'about',
      'speakers',
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
        name: "Vitor Carlos",
        gravatar: "8831190d849c1748dbb2bcdffbf71bc9",
        bio: "Um gamer da geração atari, *.dev, apaixonado por café e UX. Estuda Jogos Digitais na PUCRS e trabalha como Front-End na Joy Interactive.",
        comment: "<a href=\"https://github.com/v42/HTML-Game-Engine\" target=\"_blank\">Confere só o que ele já fez.</a> Claro, Vitor vai falar sobre games. Com certeza uma das coisas que mais entende e dedica por diversão e estudo grande parte do seu tempo. ",
        company: "Joy",
        twitter: "Vitor42",
        github: "v42",
        presentation: {
          title: "I want to play a game...",
          description: "Quer fazer um game para web e não tem nem noção por onde começar? I know that feels, bro. Vamos ver então como estruturar um projeto de game, conhecer conceitos básicos de game design, rever algumas tecnologias disponíveis e conhecer técnicas para contornar as limitações dos games na nossa plataforma favorita, que é a web! :)"
        }
      },
      {
        name: "Átila Fassina",
        gravatar: "7469dd76fa3e9ae524119b194c466e96",
        bio: "Front-end Dev que acredita no Design Responsivo como primeiro passo para uma boa UX, flanelinha de Designer e zagueiro-SEO nas horas vagas.",
        comment: "Um desenvolvedor dedicado e sempre presente em todos os eventos com as melhores perguntas. Chegou a vez do Átila dar uma aula sobre RWD.",
        company: "Lenova Internet",
        twitter: "atilafassina",
        github: "atilafassina",
        presentation: {
          title: "Responsive Web Workflow",
          description: "Trabalhar com Web Design Responsivo pode ser confuso, é um cenário em constante e rápida evolução, cheio de diferentes opções para escolher e se adaptar, novas tendências. Não existe bala de prata, mas nessa talk vamos avaliar práticas sugeridas e escolher nossas metodologias com um toolset básico para montar um projeto com nossas próprias guidelines."
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
