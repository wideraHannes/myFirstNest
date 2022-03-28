import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addProduct(
    @Body("title") prodTitle: string,
    @Body("description") prodDesc: string,
    @Body("price") prodPrice: number,
  ) {
    const newProductId = await this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: newProductId };
  }

  @Get()
  async getProducts() {
    return await this.productService.getAllProducts();
  }

  @Get(":id")
  async getProductById(@Param("id") id: string) {
    return await this.productService.getProductById(id);
  }

  @Patch(":id")
  updateProduct(
    @Param("id") id: string,
    @Body("title") prodTitle: string,
    @Body("description") prodDesc: string,
    @Body("price") prodPrice: number,
  ) {
    return this.productService.updateProduct(
      id,
      prodTitle,
      prodDesc,
      prodPrice,
    );
  }

  @Delete(":id")
  removeProduct(@Param("id") id: string) {
    this.productService.deleteProduct(id);
  }
}
