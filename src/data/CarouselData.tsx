export const data = [
  {
    title: 'Cats List App',
    description:
      "App that lists cats from CatsApi, lets you know which are child friendly by different color of background and lets you delete ones that you don't like helping you choose the best one for you",
    image: require('../components/Carousel/cats-list.png'),
    onClick: () => {
      window.open('https://github.com/MefjuS22/Cats_list_recrutation_task');
    },
  },
  {
    title: 'This portfolio website ',
    description:
      "My private portfolio website with responsive design made in React with TypeScript, Styled Components and react-motion. Lists all of my most important features and also is beautiful, isn't it?",
    image: require('../components/Carousel/portfolio-page.png'),
    onClick: () => {
      window.open('https://github.com/MefjuS22/portfolio-page/tree/master');
    },
  },
  {
    title: 'Bussiness message app',
    description:
      'App allows you to browse tasks and check messages about them from your bussiness partners. Has responsive design. Made in React with JavaScript, Styled Components.',
    image: require('../components/Carousel/bussiness_comunicator.png'),
    onClick: () => {
      window.open(
        'https://github.com/MefjuS22/junior-front-end-developer-1665736766'
      );
    },
  },
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 2,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};