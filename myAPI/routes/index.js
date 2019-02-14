var express = require('express');
var router = express.Router();


router.get('/products', (req, res, next) => {
  res.send([
    {
      name: "Samsung Galaxy",
      id: 1010,
      brand: "Samsung",
      price: "800€",
      colour: "blue, black, white, pink",
      size: "5.1",
      score: 7.1,
      picture: "https://ep01.epimg.net/tecnologia/imagenes/2017/12/13/actualidad/1513161902_661184_1513163726_noticia_normal.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "iPhone",
      id: 1011,
      brand: "Apple",
      price: "1100€",
      colour: "silver, black, white",
      size: "5.1",
      score: 8.1,
      picture: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347735544",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Huawei S8",
      id: 1012,
      brand: "Huawei",
      price: "800€",
      colour: "blue, black, white",
      size: "5.1",
      score: 8.9,
      picture: "https://cdn.eglobalcentral.com.es/images/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/2/3/23563/thumb360x360/1780929555/huawei-p20-pro-6gb-128gb-dual-sim-clt-l29c-twilight.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

  ])
})


module.exports = router;
