import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // root(user: JwtPayload): string {
  root(): string {
    return `Hello`;
  }
}
