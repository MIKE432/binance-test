import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './config';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    { provide: EnvConfig, useFactory: () => EnvConfig.validateWithLoad() },
  ],
  exports: [EnvConfig],
})
export class TradingConfigModule {}
