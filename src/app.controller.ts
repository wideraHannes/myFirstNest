import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* Root route */

@Controller()
export class AppController {
  /* Dependency Injection 
   Who ever creates a new instance of this class have to pass the Appservice
   Who is creating this class?? -> Nestjs Magic
   this is possible beacause we added in app.module the AppSerivice*/
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { name: string } {
    return { name: 'Hannes' };
  }
}
