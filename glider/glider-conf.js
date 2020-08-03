
new Glider(document.querySelector(".glider"), {
  slidesToShow: 4,
  duration: 1,
  sslidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
        breakpoint: 1,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 1,
        },  
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 1,
      },
    },
    {
      // screens greater than >= 775px
      breakpoint: 887,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 1,
      },
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1247,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 1,
      },
    },
  ],
});
