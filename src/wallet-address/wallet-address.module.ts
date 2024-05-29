// src/wallet-address/wallet-address.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletAddress } from './wallet-address.entity';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddressController } from './wallet-address.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WalletAddress])],
  providers: [WalletAddressService],
  controllers: [WalletAddressController],
})
export class WalletAddressModule {}
