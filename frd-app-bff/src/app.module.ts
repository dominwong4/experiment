import { Module } from '@nestjs/common';
import { PrometheusModule, makeCounterProvider, makeSummaryProvider } from '@willsoto/nestjs-prometheus';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisOptions } from './configs/cache.constants';
import { FriendModule } from './friend/friend.module';
import { FriendController } from './friend/friend.controller';
import { FriendService } from './friend/friend.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MetricsInterceptor } from './interceptors/metrics.interceptor';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';

@Module({
  imports: [
    PrometheusModule.register(),
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisOptions),
    FriendModule
  ],
  controllers: [FriendController],
  providers: [FriendService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: MetricsInterceptor,
    },
    makeCounterProvider({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'code'],
    }),
    makeSummaryProvider({
      name: 'http_request_duration_seconds',
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'route', 'code'],
    })],
})
export class AppModule {}
