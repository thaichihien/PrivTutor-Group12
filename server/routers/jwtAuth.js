const bcrypt = require('bcrypt');
const router = require("express").Router();
const jwtGenerator = require("../utils/jwtGenerator");
const accountDataController = require('../controllers/accountController')

// - REGISTER
router.post("/register", async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
  
      const user = await accountDataController.getAnAccountByEmail(email)
  
      if (user.rowCount != 0) {
        return res.render('Register',{error : "User is already existed!"})
       
      }
  
      // Bcrypt the password
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      // add new user to database
      const newUser = await accountDataController.createNewAccount(fullname,email,bcryptPassword)
  
  
      const token = jwtGenerator(newUser.student_id)
      req.session.token = token
      res.redirect('/')
  
  
    } catch (error) {
      console.error(error.message);
      return res.render('Register',{error : "Server error"})
  
    }
  });
  
  // - LOGIN
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await accountDataController.getAnAccountByEmail(email);
  
      if (user.rows.length === 0) {

        return res.render('Login',{error : "User is not exist"})
      }
  
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
  
      if (!validPassword) {
        return res.render('Login',{error : "The password is wrong"})
      }else{
        const token = jwtGenerator(user.rows[0].student_id);
        req.session.token = token
        res.redirect('/')
      }
   
    } catch (err) {
        console.error(err.message);
        return res.render('Login',{error : "Server error"})
    }
  });
  
  router.get('/logout',(req,res)=>{
      req.session.destroy()
      res.redirect('/')
  })

  module.exports = router