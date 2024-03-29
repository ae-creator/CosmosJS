import { Get } from '@cosmosjs/hono-openapi';
import type { hono } from '@cosmosjs/hono-openapi';
import { injectable } from 'inversify';

@injectable()
export class ControllerRoot {
  public setup(): void {
    this.helloWorld();
  }

  @Get({
    path: '/',
    responses: {},
  })
  private helloWorld(ctx?: hono.Context): unknown {
    if (ctx) {
      return ctx.json('Hello world, back is working fine');
    }
  }
}
