// src/wallet-address/wallet-address.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Get()
  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<WalletAddress> {
    return this.walletAddressService.findOne(id);
    
  }

  @Post()
  create(@Body() walletAddress: WalletAddress): Promise<WalletAddress> {
    return this.walletAddressService.create(walletAddress);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() walletAddress: WalletAddress): Promise<void> {
    return this.walletAddressService.update(id, walletAddress);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.walletAddressService.remove(id);
  }
}

