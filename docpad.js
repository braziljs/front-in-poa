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
        name: "Franz Figueroa",
        image: "images/speakers/franz-figueroa.jpg",
        bio: "Possui graduação em Análise de Sistemas pela UNISINOS (1991) e mestrado em Ciências da Computação pela UFRGS (1995). Atualmente é professor / coordenador do curso superior de tecnologia em Produção Multimídia - Faculdade Senac Porto Alegre. Tem experiência na área de Ciência da Computação, com ênfase em Computação Gráfica e Usabilidade, atuando principalmente nos seguintes temas: Computação 2D e 3D, User Experience e Games.",
        comment: "",
        company: "Faculdade Senac",
        twitter: "franzfigueroa",
        github: "",
        presentation: {
          title: "",
          description: ""
        }
      },
      {
        name: "Jaydson Gomes",
        gravatar: "572696200604e59baa59ee90d61f7d02",
        bio: "Mais de 8 anos de experiência em desenvolvimento Web, apaixonado por JavaScript, curador da BrazilJS Conf e um dos criadores e líderes da BrazilJS Foundation. Trabalha atualmente no Terra criando ferramentas e APIs JavaScript e pesquisando novas tecnologias, como HTML5 e todo o seu guarda-chuva, Node.JS e, é claro, JavaScript",
        comment: "Apoiado na evolução do desenvolvimento front-end e como um verdadeiro <a href=\"http://jaydson.org/cultura-maldita-no-desenvolvimento-de-software/\" target=\"_blank\">exterminar <del>do futuro</del> da cultura maldita</a>, Jaydson vai falar sobre a revolução a qual liderou em nome de produtos mais robustos, escaláveis e de qualidade.",
        company: "Terra",
        twitter: "jaydson",
        github: "jaydson",
        presentation: {
          title: "Processo de Desenvolvimento FrontEnd - Do caos ao Sublime",
          description: "O mundo muda constantemente. Na tecnologia isso é mais evidente, o avanço é exponêncial, e quase não conseguimos acompanhar o que há de mais novo na área em que atuamos. No desenvolvimento de software, a mudança pode influenciar diretamente no sucesso do mesmo. Novas tecnologias, novas ferramentas, novas linguagens, tudo isso deve ser considerado. O JavaScript ocupou o lugar de linguagem mais querida e popular no mundo, depois de passar anos sendo incompreendida. Esta mudança é reflexo do avanço da linguagem, das ferramentas e de todas as tecnologias que a cercam. O modo de se desenvolver código client-side mudou, e para melhor. O ambiente de desenvolvimento não é mais o mesmo, hoje temos um arsenal de ferramentas que nos ajudam a criar aplicações robustas, escaláveis e de qualidade. Praticamente tudo que existe para melhorar o desenvolvimento de software em alguma outra linguagem, também existe para JavaScript. Testes unitários, testes funcionais, ferramentas de build, validação de sintaxe, validação de convenções, integração contínua, etc. Todos os itens acima, e muitos outros, são essenciais em qualquer tipo de software, e atualmente temos o poder de tornar nossas aplicações JavaScript muito mais confiáveis do que há alguns anos. O objetivo da palestra é apresentar as principais ferramentas, tecnologias e técnicas disponíveis para o desenvolvimento de aplicações client-side, além de mostrar na prática, como mudamos completamente o processo de desenvolvimento FrontEnd em um dos maiores portais da América Latina, o Terra."
        }
      },
      {
        name: "Vitor Carlos",
        gravatar: "8831190d849c1748dbb2bcdffbf71bc9",
        bio: "Um gamer da geração atari, *.dev, apaixonado por café e UX. Estuda Jogos Digitais na PUCRS e trabalha como Front-End na Joy Interactive.",
        comment: "<a href=\"https://github.com/v42/HTML-Game-Engine\" target=\"_blank\">Confere só a engine que ele fez.</a> Claro, Vitor vai falar sobre games. Com certeza uma das coisas que mais entende e dedica por diversão e estudo grande parte do seu tempo. ",
        company: "Joy",
        twitter: "Vitor42",
        github: "v42",
        presentation: {
          title: "I want to play a game...",
          description: "Quer fazer um game para web e não tem nem noção por onde começar? I know that feels, bro. Vamos ver então como estruturar um projeto de game, conhecer conceitos básicos de game design, rever algumas tecnologias disponíveis e conhecer técnicas para contornar as limitações dos games na nossa plataforma favorita, que é a web! :)"
        }
      },
      {
        name: "Glauber Ramos",
        gravatar: "5716ab9479c715eecc6a9a7f2139da75",
        bio: "Trabalha como UX designer e front-end developer na Thoughtworks Brasil em Porto Alegre. Gosta de trabalhar em ambientes ágeis onde possa colaborar com outros e construir a melhor experiência com foco no usuário. Acredita na web como um ambiente de inovação onde é possível aprender, compartilhar seu trabalho, inspirar e ser inspirado por outras pessoas.",
        comment: "Sabemos, não podia faltar uma palestra sobre folhas de estilo. Mas muito além do bê-a-ba, Glauber vai falar de pré-processadores e técnicas de organização de CSS.",
        company: "Thoughtworks",
        twitter: "glauberamos",
        github: "glauberramos",
        presentation: {
          title: "Técnicas e organização de CSS",
          description: "Nessa talk falarei sobre técnicas e organização de CSS, como podemos usar pré-processadores hoje em dia, variáveis, nesting e mixins. Diferentes técnicas de organização de CSS como SMACSS, BEM, DRY CSS e OOCSS. Normalize, grids semânticos, dicas de CSS e como utilizar boas práticas utilizadas pelos frameworks mais famosos (Bootstrap, Inuit, Pure, Foundation) para criar seu próprio framework."
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
      },
      {
        name: "Randal Maia",
        gravatar: "02bb6d790ea355609c1eaed994465054",
        bio: "Já foi sobrinho, menino do HTML e atualmente, Front-end Engineer no ContaAzul, startup B2B brasileira. Focado em resultados, acredita na influência de um bom front-end na experiência do usuário e nas métricas de um software. Também entusiasta web, empreendedor e graduando em Análise de Sistemas pela UDESC.",
        comment: "Viu no crescimento da equipe em que trabalha o desafio de acelerar o desenvolvimento e manter a qualidade do produto. Randal nos apresentará o processo de criação de um Guia de Estilos, solução para seus problemas.",
        company: "ContaAzul",
        twitter: "randalmaia",
        github: "randalmaia",
        presentation: {
          title: "Acelere, faça amigos e aprenda com seu guia de estilos",
          description: "Sabe aquele momento em que o designer entrega milhões de telas e você sente que não vai dar conta de todas as tarefas? Nesta talk, quero falar sobre como acelerar seu processo de desenvolvimento, fazer amigos dentro da sua equipe, compartilhar seu conhecimento e ter seu próprio guia de estilos."
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Cure Studio Design",
        logo: "images/sponsors/cure.svg",
        url: "http://curestudio.com.br"
      },
      {
        name: "Grifo",
        logo: "images/sponsors/grifo.svg",
        url: "http://gri.fo"
      },
      {
        name: "Senac",
        logo: "images/sponsors/senac.svg",
        url: "http://www.senac.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Abradi RS",
        logo: "images/sponsors/abradi.svg",
        url: "http://www.abradirs.com.br"
      },
      {
        name: "Codeminer42",
        logo: "images/sponsors/codeminer.svg",
        url: "http://www.codeminer42.com"
      },
      {
        name: "Brazil JS",
        logo: "images/sponsors/brazil-js.svg",
        url: "http://braziljs.org"
      }
    ]
  }
};
