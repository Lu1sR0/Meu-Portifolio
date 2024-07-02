/* Aqui é onde eu posso mudar todos que será mostrado para o usuário*/

export const navItems = [
    { name: "Sobre mim", link: "#sobre" },
    { name: "Projetos", link: "#projetos" },
    // { name: "Rewies", link: "#reviews" }, quando eu tiver clientos eu ativo isso
    { name: "Skills", link:"#skills"},
    { name: "Contato", link: "#contato" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Meu obejetivo é sempre entregar projetos que superem as expectativas. ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",  
      img: "/cliente.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Sempre conectado com o mundo",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Trabalho com",
      description: "Sempre em busca de melhorar!",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Apenas um garoto apaixonado por tecnologia",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Atualmente estudando Typescript",
      description: "Por dentro do código...",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Tem algum projeto em mente?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  // c#: csharp-svgrepo-com.svg 
  // css: css-svgrepo-com.svg 
  // flutter: flutter-svgrepo-com.svg
  // .NET: framework-net-svgrepo-com.svg
  // HTML: html-5-svgrepo-com.svg
  // Javascript: javascript-svgrepo-com.svg
  // NOde.js: node-js-svgrepo-com.svg
  // react: react-svgrepo-com.svg
  //dart : dart-svgrepo-com.svg
  //tailwind css : tail.svg
  //typescript : ts.svg
  export const projects = [
    {
      id: 1,
      title: "RetroGarage",
      des: "Um projeto de uma loja de carros feito na ETEC Basilides de Godoy ,esse projeto foi feito pela minha empresa ficticia a qual eu atuei como Front-End,a sua porposta era ser somente uma página de exibição sem muitas funcionalidades",
      img: "/lojadecarros.png",
      iconLists: ["/css-svgrepo-com.svg", "/html-5-svgrepo-com.svg", "/javascript-svgrepo-com.svg"],
      link: "https://retrogarage.netlify.app",
    },
    // { Só copiar e colar isso para add outros projetos
    //   id: 1,
    //   title: "RetroGarage",
    //   des: "Um projeto de uma loja de carros feito na ETEC Basilides de Godoy ,esse projeto foi feito pela minha empresa ficticia a qual eu atuei como Front-End,a sua porposta era ser somente uma página de exibição sem muitas funcionalidades",
    //   img: "/lojadecarros.png",
    //   iconLists: ["/css-svgrepo-com.svg", "/html-5-svgrepo-com.svg", "/javascript-svgrepo-com.svg"],
    //   link: "https://retrogarage.netlify.app",
    // },
    {
      id: 2,
      title: "Monte seu PC",
      des: "Aplicativo desenvolvido para o usuario realizar a monstagem de um configuração que o agrade e salva-lá como PDF",
      img: "/monteseupc.png",
      iconLists: ["/dart-svgrepo-com.svg", "/flutter-svgrepo-com.svg",],
      link: "https://monteseupc.netlify.app",
    },
  ];
  
  export const testimonials = [
    {
      quote:
      "Seja meu primeiro e cliente e me fale oque achou do projeto entregue",
      name: "",
      title: "", //cargo ou sla oque for aqui
    },
    {
      quote:
      "Seja meu primeiro e cliente e me fale oque achou do projeto entregue",
      name: "",
      title: "", //cargo ou sla oque for aqui
    },
    {
      quote:
      "Seja meu primeiro e cliente e me fale oque achou do projeto entregue",
      name: "",
      title: "", //cargo ou sla oque for aqui
    },
    {
      quote:
      "Seja meu primeiro e cliente e me fale oque achou do projeto entregue",
      name: "",
      title: "", //cargo ou sla oque for aqui
    },
    {
      quote:
        "Seja meu primeiro e cliente e me fale oque achou do projeto entregue",
      name: "",
      title: "", //cargo ou sla oque for aqui
    },
  ];
  
  // Aqui posso trocar as empresas para por empresas que já fiz algum trabalho para elas 
  // export const companies = [
  //   {
  //     id: 1,
  //     name: "cloudinary",
  //     img: "/cloud.svg",
  //     nameImg: "/cloudName.svg",
  //   },
  //   {
  //     id: 2,
  //     name: "appwrite",
  //     img: "/app.svg",
  //     nameImg: "/appName.svg",
  //   },
  //   {
  //     id: 3,
  //     name: "HOSTINGER",
  //     img: "/host.svg",
  //     nameImg: "/hostName.svg",
  //   },
  //   {
  //     id: 4,
  //     name: "stream",
  //     img: "/s.svg",
  //     nameImg: "/streamName.svg",
  //   },
  //   {
  //     id: 5,
  //     name: "docker.",
  //     img: "/dock.svg",
  //     nameImg: "/dockerName.svg",
  //   },
  // ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Entusiasta de Codificação Criativa",
      desc: "Exploro e implemento técnicas de codificação criativa para desenvolver elementos web visualmente impressionantes e interativos, ultrapassando os limites do desenvolvimento front-end tradicional.",
      className: "md:col-span-2",
      thumbnail: "/icons8-idea-94.png",
    },
    {
      id: 2,
      title: "Desenvolvedor Web com Conhecimentos em Back-End",
      desc: "Atuação no desenvolvimento de soluções web integradas, combinando habilidades front-end com experiência em back-end usando .NET e MySQL para garantir a eficiência e segurança das aplicações.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/icons8-code-100.png",
    },
    {
      id: 3,
      title: "Desenvolvedor de Aplicativos Multiplataforma",
      desc: "Construo aplicativos para plataformas iOS e Android usando Flutter, garantindo uma experiência de usuário fluida em todos os dispositivos",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/icons8-multiple-devices-94.png",
    },
    {
      id: 4,
      title: "Cada Projeto é Ùnico",
      desc: "Até mesmo o projeto mais simples sempre merece algo que faça-o se destacar no mundo digital",
      className: "md:col-span-2",
      thumbnail: "/icons8-fingerprint-94.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      caminho: "https://github.com/Lu1sR0"
    },
    {
      id: 2,
      img: "/twit.svg",
      caminho:"https://x.com/Lu1sR_"
    },
    {
      id: 3,
      img: "/link.svg",
      caminho: "https://www.linkedin.com/in/luis-roberto-cardoso-trindade-2852891b3/"
    },
    {
      id: 4,
      img: "/whatsapp-glyph-black-logo-svgrepo-com (1).svg",
      caminho: "https://w.app/LR"
    },
  ];