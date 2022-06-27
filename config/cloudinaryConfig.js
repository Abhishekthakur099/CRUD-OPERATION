import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
const uploader = cloudinary.v2;

uploader.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINAY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

export default uploader;
