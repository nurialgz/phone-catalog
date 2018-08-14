var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const phoneList = [
    {
      title: 'XIAOMI REDMI S2',
      description: 'Android 8.1 Oreo, Qualcomm Snapdragon 625 (8 núcleos)',
      image: 'https://chinacoupon.info/wp-content/uploads/2018/06/Xiaomi-Redmi-S2-4G-Phablet-1.jpg',
      price: 179, 
      weight: 170,
      SIM: 'nano SIM',
      operatingSystem: 'Android 8.1 Oreo',
      battery: 3080,
      bluetooth: 4.2,
      camera: {
        resolution: 12,
        FPS: 30
      }
      
    },
    {
      title: 'APPLE IPHONE 6',
      description: 'iOS 8, Apple A8',
      image: 'http://media.4rgos.it/i/Argos/7438424_R_Z001A?$Web$&$DefaultPDP570$',
      price: 214, 
      weight: 129,
      SIM: 'nano SIM',
      operatingSystem: 'iOS 8',
      battery: 1810,
      bluetooth: 4.2,
      camera: {
        resolution: 8,
        FPS: 60
      }
      
    },
    {
      title: 'BLACKBERRY TORCH 9800',
      description: 'BlackBerry OS 7.0.0. Procesador no especificado',
      image: 'https://www.technopat.net/db/wp-content/uploads/2016/10/BlackBerry-Torch-9800.jpg',
      price: 300, 
      weight: 161,
      SIM: 'miniSIM',
      operatingSystem: 'BlackBerry OS 7.0.0',
      battery: 1270,
      bluetooth: 2.1,
      camera: {
        resolution: 5,
        FPS: 30
      }
    },
    {
      title: 'SAMSUNG GALAXY A3',
      description: 'Android 4.4 KitKat. Procesador no especificado',
      image: 'https://www.movilzona.es/app/uploads/2014/11/Samsung-Galaxy-A3.png',
      price: 350, 
      weight: 110,
      SIM: 'micro SIM',
      operatingSystem: 'Android 4.4 KitKat',
      battery: 1900,
      bluetooth: 4,
      camera: {
        resolution: 8,
        FPS: 30
      }
      
    },
    {
      title: 'ASUS ZENFONE 2',
      description: 'Android 5.1 Lollipop. Intel Atom Z3580 (4 núcleos)',
      image: 'https://www.movilzona.es/app/uploads/2016/10/ASUS-Zenfone-2-frontal.png',
      price: 375, 
      weight: 170,
      SIM: 'micro SIM',
      operatingSystem: 'Android 5.1 Lollipop',
      battery: 3000,
      bluetooth: 4,
      camera: {
        resolution: 13,
        FPS: 30
      }      
    },
    {
      title: 'ENERGY-SISTEM ENERGY PHONE MAX 2 +',
      description: 'Android 6.0 Marshmallow. Procesador no especificado',
      image: 'https://www.movilzona.es/app/uploads/2016/11/Energy-Sistem-Energy-Phone-Max-2-frontal.png',
      price: 160, 
      weight: 400,
      SIM: 'micro SIM',
      operatingSystem: 'Android 6.0 Marshmallow',
      battery: 3500,
      bluetooth: 4,
      camera: {
        resolution: 13,
        FPS: 30
      } 
    }
  ];

  res.send(phoneList);
  // res.send('respond with a resource');
});

module.exports = router;
