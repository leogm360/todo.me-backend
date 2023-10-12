import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Endpoint to do server health checks.
   *
   * @returns Ok!
   */
  getHeartbeat(): string {
    return 'Ok!';
  }
}
