// username, password  | USERS table
// organization  | ORGANIZATIONS
// boards  | BOARDS TABLE
// issues  | ISSUES TABLE
const express=require("express");
const jwt=require("jsonwebtoken");
const { authMiddleware } = require("./middleware");

const USERS_ID=1;
const ORGANIZATION_ID=1;
const BOARD_ID=1;
const ISSUES_ID=1;

const USERS=[{
    id:1,
    username:"prav",
    password:"123123"
},{
    id:2,
    username:"spidey",
    password:"123123"
}]

const ORGANIZATIONS=[{
    id:1,
    title:"100xdevs",
    description:"Learning coding platform",
    admin:"prav",
    members:[2]
},{
    id:1,
    title:"spidey",
    description:"Experimenting",
    admin:1,
    members:[]
}]

const BOARDS=[{
    id:1,
    title:"100xschool website frontend",
    organizationId:1
}]

const ISSUES=[{
    id:1,
    title:"Add dak mode",
    boardId:1,
    state:"pending"
},{
    id:2,
    title:"Allow admis to create more courses",
    boardId:1,
    state:"Done"
}]

const app=express();
app.use(express.json());



app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const userExists=USERS.find(u=>u.username===username);
    if(userExists){
        res.status(411).json({
            message:"User with this username already exists"
        })
        return;
    }
    USERS.push({
         id:USERS_ID++,
        username,
        password
       
    })
    res.json({
        message:"You have signed up successfully"
    })
})

app.post("/signin",(req,res)=>{
        const username=req.body.username;
        const password=req.body.password;

        const userExists=USERS.find(u=>u.username===username&&u.password===password);
        if(!userExists){
            res.status(403).json({
                message:"Incorrect credentials"
            })
        }

       const token= jwt.sign({
            userId:userExists.id
        },"spidey-super-secret-key")
        // create jwt for the user

        res.json({
            token
        })

})

app.post("/organization",authMiddleware,(req,res)=>{
// token	- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc3NDk3NzEyNn0.KZmih-aY_0VZfADm6Kf0VKPkdFEmXqpofz_Nx3ekt6A


})

app.post("/add-member-to-organization",(req,res)=>{

})

app.post("/board",(req,res)=>{

})

app.post("/issue",(req,res)=>{

})


// get
app.get("/boards/:organization",(req,res)=>{

})

app.get("/issues",(req,res)=>{

})

app.get("/members",(req,res)=>{

})


// Put - update
app.put("/issues",(req,res)=>{

})

// Delete
app.delete("/delete-members",(req,res)=>{

})

app.listen(3000);