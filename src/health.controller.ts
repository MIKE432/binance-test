import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  getHello(): Promise<{ status: 'ok' }> {
    return Promise.resolve({ status: 'ok' });
  }
}
