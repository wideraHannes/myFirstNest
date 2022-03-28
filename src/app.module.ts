import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";

/* Importantn thing -> Embraces Modularity
  Controllers -> Controller how you handle incoming request
  providers -> Services to inject into Controllers or other services
            -> Service reach out to db 
            -> Controller reachses to Service

  Modules are split up but feature -> Produkt, Shopping cart
  -> Magic happens in @Module -> Decorator can be attached to everything 
*/
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/mongo-nest"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
