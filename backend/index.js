const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());


// Database connection with mongoDB

mongoose.connect("mongodb://adrayandaleandrew:user123@ac-8aanww4-shard-00-00.dmi11ee.mongodb.net:27017,ac-8aanww4-shard-00-01.dmi11ee.mongodb.net:27017,ac-8aanww4-shard-00-02.dmi11ee.mongodb.net:27017/R&R?ssl=true&replicaSet=atlas-14m2k3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")



// API Creation
app.get("/", (req, res)=>{
    res.send("Express app is running")
})

// Image storage engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage});

// Creating endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for creating products
const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type: Number,
        required:true,
    },
    date:{
        type: String,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },

})


app.post('/addproduct', async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product ({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for deleting products
app.post('/removeproduct', async(req, res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})


// Creating API for getting all products
app.get('/allproducts', async(req, res)=>{
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})


app.listen(port, (error)=>{
    if(!error){
        console.log("Server is running on Port: " + port);
    } else {
        console.log("Error: " + error);
    }
})