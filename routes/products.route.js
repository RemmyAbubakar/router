const { createProduct,deleteProduct,getProduct,updateProduct } = require("../controllers/products.controller");

const router = require("express").Router;



const productRouter = router();

productRouter.get("/", getProduct);
productRouter.post("/", createProduct);
productRouter.patch("/", updateProduct);
productRouter.delete("/", deleteProduct);


module.exports = productRouter;