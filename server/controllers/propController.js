import expressAsyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createProperty = expressAsyncHandler(async (req, res) => {
  //create any property
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;
  console.log(req.body.data);

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });
    res.send({ message: "Property listed successfully" });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error(" This property exists on our portal");
    }
    throw new Error(err.message);
  }
});

export const getAllProperties = expressAsyncHandler(async (req, res) => {
  //get all the properties in one go from backend
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(residencies);
  } catch (err) {
    throw new Error(err.message);
  }
});

export const getProperty = expressAsyncHandler(async (req, res) => {
  //get any specific property from all the properties listed
  const { id } = req.params;
  try {
    const residency = await prisma.residency.findUnique({ where: { id: id } });
    if(residency){
        res.send(residency);
    }else{
        res.status(400).json({message:"Property you are trying to fetch, doesn't exist"})
    }
  } catch (err) {
    throw new Error(err.message);
  }
});
export const personalProperty = expressAsyncHandler(async (req, res) => {
  //get only the current user's all the properties he has listed.
  const { email } = req.body;
  try {
    const userResidencies = await prisma.residency.findMany({
      where: { userEmail: email },
    });
    if (userResidencies.length !== 0) {
      res.status(200).json({ userResidencies });
    } else {
      res
        .status(400)
        .json({ message: "User doesn't have any listngs on our platform" });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});
export const deleteProperty = expressAsyncHandler(async (req, res) => {
  //delete any property from the DB
  const { id } = req.params;
  try {
    const deleted = await prisma.residency.delete({ where: { id: id } });
    if (deleted) {
      res.send({ message: "Property Deleted Successfully" });
    }
  } catch (err) {
    console.log("Property wasnt Found");
    throw new Error(err.messsage);
  }
});
