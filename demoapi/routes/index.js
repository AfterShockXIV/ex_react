const  axios = require('axios')
var express = require('express');
const APP_SETTING = require('../env');
var router = express.Router();

/* GET home page. */
router.get('/post', async function(req, res, next) {
 try {
   const result = await axios({
    url : APP_SETTING.DEV.WEBS_CONFIG.POST,
    method: "GET"
   })
   await res.json({
    message:"test" , 
    data : result.data
   }).end()
 } catch (error) {
   res.send(400).end()
 }
});


router.post("/add_post" , async (req,res,next) =>{
  try {
    const payload = req.body
    res.json({
      data : payload
    })
  } catch (error) {
    res.send(400).end()
  }
})


router.put("/post/:id" , async (req,res,next) =>{
  try {
    const {id} = req.params
    res.json({
      data : id
    })
  } catch (error) {
    res.send(400).end()
  }
})

module.exports = router;
