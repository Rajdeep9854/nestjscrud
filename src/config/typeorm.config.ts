// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { WalletAddress } from '../wallet-address/wallet-address.entity'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456789',
  database: 'userAndWalletAddress',
  entities: [User, WalletAddress],
  synchronize: true,
};
