import express from 'express';
import { createProperty, getAllProperties,getProperty, personalProperty,deleteProperty } from '../controllers/propController.js';

const router = express.Router();
router.post("/property", createProperty);
router.get("/list-properties", getAllProperties)
router.get("/property/:id", getProperty)
router.post("/myProperties", personalProperty)
router.post("/myProperties/:id",deleteProperty)
export { router as propertyRoute };
