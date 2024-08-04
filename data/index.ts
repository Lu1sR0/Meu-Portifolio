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
      title: "Meu objetivo é sempre entregar projetos que superem as expectativas. ",
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
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Sou apaixonado por tecnologia",
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
      title: "Quer saber mais sobre mim?",
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
  //vite : vite-svgrepo-com.svg
  //postman : postman-icon-svgrepo-com.svg
  //gsap : gsap.svg
  //three: three.svg
  //next: next.svg
  //framer motion: framer-svgrepo-com.svg
  export const projects = [
    {
      id: 1,
      title: "RetroGarage",
      des: "Um projeto de uma loja de carros feito na ETEC Basilides de Godoy ,esse projeto foi feito pela minha empresa ficticia a qual eu atuei como Front-End,a sua porposta era ser somente uma página de exibição sem muitas funcionalidades",
      img: "/lojadecarros.png",
      iconLists: ["/css-svgrepo-com.svg", "/html-5-svgrepo-com.svg", "/javascript-svgrepo-com.svg"],
      link: "https://retrogarage.netlify.app",
    },
    {
      id: 2,
      title: "Sankoi",
      des: "Restaurante japonês - Sankoi",
      img: "/sankoi.png",
      iconLists: ["/html-5-svgrepo-com.svg", "/css-svgrepo-com.svg","/javascript-svgrepo-com.svg","/vite-svgrepo-com.svg"],
      link: "https://sankoi.netlify.app",
    },
    {
      id: 3,
      title: "Loja da Apple",
      des: "Recriei o site do Apple iPhone 15 Pro, combinando animações GSAP e efeitos 3D Three.js.",
      img: "/apple.png",
      iconLists: ["/ts.svg", "/react-svgrepo-com.svg", "/tail.svg", "/vite-svgrepo-com.svg","/gsap.svg","/three.svg"],
      link: "https://applelr.vercel.app",
    },
    {
      id: 4,
      title: "Monte seu Lego",
      des: "Website com a finalidade do usuario montar seu boneco LEGO e depois compartilhar",
      img: "/lego.png",
      iconLists: ["/html-5-svgrepo-com.svg", "/css-svgrepo-com.svg","/javascript-svgrepo-com.svg"],
      link: "https://monteseulego.netlify.app",
    },
    {
      id: 5,
      title: "Amazing Fantasy",
      des: "Aplicativo da web para ler a primeira edição de homem aranha de uma forma mais interativa",
      img: "/miranha.png",
      iconLists: ["/react-svgrepo-com.svg", "/tail.svg", "/vite-svgrepo-com.svg","/three.svg"],
      link: "https://amazingfantasy.vercel.app",
    },
    {
      id: 6,
      title: "Personalize sua Camiseta",
      des: " Este aplicativo da web interativo permite que os usuários criem seus próprios designs exclusivos de camisetas selecionando cores diferentes e enviando arquivos de logotipo. O projeto é construído usando a poderosa biblioteca three.js para renderização 3D",
      img: "/criesuacamiseta.png",
      iconLists: ["/react-svgrepo-com.svg", "/framer-svgrepo-com.svg", "/vite-svgrepo-com.svg","/three.svg"],
      link: "https://criesuacamiseta.vercel.app",
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
      title: "Desenvolvedor com experiência em 3D",
      desc: "Estou sempre em busca de conhecer novas tecnologias e ferramentes e recentemente estou estudando a fundo a implementação de elementos 3D em páginas da Web,acredito que o meu conhecimento em Blender me ajuda bastante",
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
      img: "/link.svg",
      caminho: "https://www.linkedin.com/in/luis-roberto-cardoso-trindade-2852891b3/"
    },
    {
      id: 3,
      img: "/whatsapp-glyph-black-logo-svgrepo-com (1).svg",
      caminho: "https://wa.me/5511989918871?text=Ol%C3%A1,tenho%20um%20projeto%20para%20voc%C3%AA%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
    },
    {
      id: 4,
      img: "/insta.svg",
      caminho: "https://www.instagram.com/lrdeveloper/"
    },
  ];