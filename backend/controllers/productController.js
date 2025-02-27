import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  const { name, description, price, image, categoryId, sub_categoryId } = req.body;
  let image_filename = req.file ? req.file.filename : null; // Nếu không có file thì gán giá trị null
  const product = new productModel({
    name: name,
    description: description,
    price: price,
    image: image_filename,
    categoryId: categoryId,
    sub_categoryId: sub_categoryId,
  });
  try {
    await product.save();
    res.json({ success: true, status: 200, message: "Product Added" });
  } catch (error) {
    res.json({ success: false, status: 400, message: "Product Add Failed" });
    console.log(error);
  }
};

const listProduct = async (req, res) => {
  try {
    let query = {};
    const product = await productModel.find(query);
    res.json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addProduct, listProduct };
