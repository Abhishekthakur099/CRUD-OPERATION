import User from "../models/User.js";
import cloudinaryUploader from "../config/cloudinaryConfig.js";

async function createUser(req, res) {
  try {
    const fileUrls = [];
    if (req.files) {
      for (let file of req.files) {
        let result = await cloudinaryUploader.uploader.upload(file.path);
        fileUrls.push(result.secure_url);
      }
    }
    let result = await User.create({ ...req.body, image: fileUrls });
    res.status(201).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getUsers(req, res) {
  let { limit, page, sortBy, sortOrder } = req.query;
  try {
    let count = await User.find().count();
    let result = await User.find()

      .sort({ [sortBy]: sortOrder || 1 })
      .limit(limit || 10)
      .skip(parseInt(page) * limit);
    res.status(200).send({ count, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function deleteUser(req, res) {
  try {
    let result = await User.deleteOne({ _id: req.params.id });
    res.status(200).send("product deleted");
  } catch (error) {
    res.status(400).send(error.meassage);
  }
}
async function updateUser(req, res) {
  try {
    let result = await User.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getUser(req, res) {
  try {
    let result = await User.findById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createUser, getUsers, deleteUser, updateUser, getUser };
