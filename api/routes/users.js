const router = require('express').Router();

const User = require('../controllers/user');

router.get('/',User.getAllUsers);
router.get('/:id', User.getUserById);
router.put('/:id', User.updateUserById);


// router.get('/', (req,res) => {
    
//     // const{ query } = req;
//     // const { status } = req.query;
//     // console.log(status);
//     let all = users;
//     console.log(all);
//     // if(status === "true"){
        
//     //     all = users.filter((user) =>{
//     //         return user.status === true;
           
//     //     })
        
//     // }else{   
//     //     all = users.filter((user) =>{
//     //         return user.status === false;
//     //     })
//     // }
    
//     res.json(all);
// });

// router.get('/:id', (req,res) => {
//     const { params } = req;

//     const id = params.id;

//     const user = users.find((user) => {
//         return user.id === parseInt(id);
//     });

//     if(user){   
//         res.json(user);
//     }else{
//         res.status(404).json({error: `User by id ${id} not found`});
//     }

// });

// router.put('/:id',(req,res) => {
//     const {params , body} = req;
//     const id = params.id;

//     const user = users.find((user) =>{
//         return user.id === parseInt(id);

//     });

//     if(user){
//         res.json({...user, ...body});
//     }else{
//         res.status(404).json({error:`User by id ${id} not found`});
//     }

// }); 

module.exports = router;