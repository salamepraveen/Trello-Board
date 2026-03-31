// username, password  | USERS table
// organization  | ORGANIZATIONS
// boards  | BOARDS TABLE
// issues  | ISSUES TABLE
const express=require("express");

const users=[{
    id:1,
    username:"prav",
    password:"123123"
},{
    id:2,
    username:"spidey",
    password:"123123"
}]

const organizations=[{
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

const boards=[{
    id:1,
    title:"100xschool website frontend",
    organizationId:1
}]

const issues=[{
    id:1,
    title:"Add dak mode",
    boardId:1
},{
    id:2,
    title:"Allow admis to create more courses",
    boardId:1
}]

const app=express();
