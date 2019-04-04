const express = require('express')
const router = express.Router()
const Hero = require('../models/hero')
//查询所有英雄信息路由
router.get('/hero', (req, res) => {
    console.log(2222222222 )
    // console.log(Hero)
    Hero.find({})
    .then(heros => {
        console.log(11111)
        res.json(heros)
    })
    .catch(err => {
        console.log(211)
        res.json(err)
    })
})
//通过ObjeectId 查询单个英雄信息路由
router.get("/hero/:id", (req, res) => {
    Hero.findById(req.params.id)
    .then(hero => {
        res.json(hero)
    })
    .catch(err => {
        res.json(err)
    })
})

// 添加一个英雄信息路由
router.post("/hero", (req, res) => {
    //使用Hero model上的create方法储存数据
    console.log(1,req.body)
    Hero.create(req.body, (err, hero) => {
      if (err) {
        res.json(err);
      } else {
        console.log(req)
        res.json(hero);
      }
    });
  });
  
  //更新一条英雄信息数据路由
  router.put("/hero/:id", (req, res) => {
    console.log(2, req.body)
    Hero.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          sex: req.body.sex,
          address: req.body.address,
          dowhat: req.body.dowhat,
          favourite: req.body.favourite,
          explain: req.body.explain
        }
      },
      {
        new: true
      }
    )
      .then(hero => res.json(hero))
      .catch(err => res.json(err));
  });
  
  // 添加图片路由
  router.put("/addpic/:id", (req, res) => {
    Hero.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          imgArr: req.body.url
        }
      },
      {
        new: true
      }
    )
      .then(hero => res.json(hero))
      .catch(err => res.json(err));
  });
  
  //删除一条英雄信息路由
  router.delete("/hero/:id", (req, res) => {
    Hero.findOneAndRemove({
      _id: req.params.id
    })
      .then(hero => res.send(`${hero.title}删除成功`))
      .catch(err => res.json(err));
  });
  
  module.exports = router;
  
  
  
  