const mongoose = require("mongoose");

// Define the schema for the object inside each category
const imageObjectSchema = new mongoose.Schema({
    unique_id: {
        type: mongoose.Schema.Types.ObjectId, // Automatically generates a unique ID for each object
        default: () => new mongoose.Types.ObjectId(),
    },
    image_url: {
        type: String, // Stores the URL of the image
        required: true,
    },
    disease: {
        type: String, // Name of the disease associated with the image
        required: true,
    },
    cure: {
        type: String, // Cure for the disease
        required: true,
    },
    details: {
        type: String, // Additional details about the disease and cure
        required: true,
    }
});

// Define the category schema to hold a list of these objects
const categorySchema = new mongoose.Schema({
    images: [imageObjectSchema] // Array of image objects
});

// Define the main user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    potato: {
        type: categorySchema,
        default: { images: [] },
    },
    tomato: {
        type: categorySchema,
        default: { images: [] },
    },
    pepperBell: {
        type: categorySchema,
        default: { images: [] },
    },
});

module.exports = mongoose.model("userstb2", userSchema);
