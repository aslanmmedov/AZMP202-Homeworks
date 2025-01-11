const ImmigrationsModel = require("../models/immigrators");

const GetAllData =  async (req, res) => {
    try {
        const immigrators = await ImmigrationsModel.find({});
        res.status(200).json({data:immigrators,message:"succes"})
    } catch (error) {
        res.status(404).json({data:immigrators,message:"not found"})
    }
}

const DeleteDataById =  async (req, res) => {
    const {id} = req.params;
    try {
        const DeletedImmigrator = await ImmigrationsModel.findByIdAndDelete(id);
        res.status(200).json({data:DeletedImmigrator,message:"succesfully deleted"})
    } catch (error) {
        res.status(404).json({data:DeletedImmigrator,message:"not found"})
    }
}
const AddData =  async (req, res) => {
    const {image,country,title,description} = req.body;
    try {
        const AddImmigrator =  ImmigrationsModel({...req.body});
        await AddImmigrator.save();
        res.status(201).json({data:AddImmigrator,message:"succesfully added"})
    } catch (error) {
        res.status(400).json({data:AddImmigrator,message:"bad request"})
    }
}
const GetDataById =  async (req, res) => {
    const {id} = req.params;
    try {
        const GetImmigrator =  await ImmigrationsModel.findById(id);
        res.status(200).json({data:GetImmigrator,message:"succes"})
    } catch (error) {
        res.status(404).json({message:"Not Found"})
    }
}


module.exports = {
    GetAllData,
    DeleteDataById,
    AddData,
    GetDataById,
}