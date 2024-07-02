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
  
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwiPnafz2YaHAxUpppUCHYMuDnIQPAgI",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
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