import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./products.model";
import { Model } from "mongoose";

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor(
    @InjectModel("Product") private readonly productModel: Model<Product>,
  ) {}
  async insertProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description,
      price,
    });
    const result = await newProduct.save();
    console.log(result);
    return result.id;
  }

  async getAllProducts() {
    const products = await this.productModel.find();
    return products;
  }

  async getProductById(id: string) {
    const product = await this.productModel.findById(id);
    return product;
  }

  async updateProduct(
    id: string,
    title: string,
    description: string,
    price: number,
  ) {
    const product = await this.productModel.findById(id);
    product.title = title;
    product.description = description;
    product.price = price;
    product.save();
    return id;
  }

  async deleteProduct(id: string) {
    const product = await this.productModel.findById(id);
    await this.productModel.deleteOne(product._id);
    return null;
  }
}
