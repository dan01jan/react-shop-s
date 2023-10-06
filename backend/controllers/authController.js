const User = require('../models/user');
// const sendToken = require('../utils/jwtToken');

exports.registerUser = async (req, res, next) => {
    const { name, email, password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/hsdfl66pg2mpvp5irfqy',
            url: 'https://res.cloudinary.com/dgneiaky7/image/upload/v1680144230/avatars/hsdfl66pg2mpvp5irfqy.jpg'
        },
        //role,
    })
    //test token
     const token = user.getJwtToken();

      res.status(201).json({
      	success:true,
      	user,
     	token
      })
    //sendToken(user, 200, res)
}