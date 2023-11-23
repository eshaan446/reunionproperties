import expressAsyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';
import jwt from 'jsonwebtoken'
const jwtSecret="MynameisEshaanPandeyReunionWebGp"
export const createUser = expressAsyncHandler(async (req, res) => {
    //console.log("creating user");
    let {email}=req.body;
    const userExists=await prisma.user.findUnique({where:{email:email}})
    if(!userExists){
        const user= await prisma.user.create({data:req.body})
        res.send({
            message:"Signup successfull",
        })
    }
    else{
        res.status(400).json({message:"User already exists"})
    }
});
export const loginUser=expressAsyncHandler(async(req,res)=>{
    let {email}=req.body;
    const userExists=await prisma.user.findUnique({where:{email:email}})
    if(userExists){
        const data={
            user:{
                email:email
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
        res.status(200).json({message:"User Exists in the DB",authToken:authToken,email:email})
    }else{
        res.status(400).json({message:"User Doesnt Exists in the DB"})
    }

})