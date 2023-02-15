import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./modules/auth/auth.module";
import { BondModule } from "./modules/bond/bond.module";
import { TokenModule } from "./modules/token/token.module";
import { TransactionModule } from "./modules/transaction/transaction.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [TransactionModule, UserModule, AuthModule, TokenModule, BondModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
