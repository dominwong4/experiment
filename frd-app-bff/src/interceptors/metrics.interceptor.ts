import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Counter, Summary } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(
    @InjectMetric('http_requests_total') public requestCounter: Counter<string>,
    @InjectMetric('http_request_duration_seconds')
    public requestDuration: Summary<string>,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const end = this.requestDuration.startTimer();
    return next.handle().pipe(
      tap(() => {
        const http = context.switchToHttp();
        const request = http.getRequest();
        const response = http.getResponse();
        this.requestCounter.inc({
          method: request.method,
          route: request.url,
          code: response.statusCode,
        });
        end({
          method: request.method,
          route: request.url,
          code: response.statusCode,
        });
      }),
    );
  }
}
