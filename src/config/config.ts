import { plainToInstance } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';
import * as dotenv from 'dotenv';

export class EnvConfig {
  @IsString()
  BINANCE_API_KEY: string;

  @IsString()
  BINANCE_API_SECRET: string;

  static validateWithLoad() {
    const config = this.load();

    const errors = validateSync(config);
    if (errors.length > 0) {
      throw new Error(
        `Incorrect environment values: ${errors.map((error) => error.property).join()}`,
      );
    }

    return config;
  }

  private static load(): EnvConfig {
    dotenv.config();

    return plainToInstance(EnvConfig, process.env, {
      exposeDefaultValues: true,
    });
  }
}
