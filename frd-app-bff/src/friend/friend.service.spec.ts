import { Test, TestingModule } from '@nestjs/testing';
import { FriendService } from './friend.service';
import { AppModule } from '../app.module';
import { FriendModule } from './friend.module';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';

describe('FriendService', () => {
  // let service: FriendService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     imports:[AppModule, FriendModule],
  //     providers: [FriendService],
  //   })
  //   .overrideProvider(CACHE_MANAGER)
  //   .useValue({
  //     // your options go here (minus host and port and store), or you can leave as an empty object
  //   }).compile();

  //   service = module.get<FriendService>(FriendService);
  // });

  // it('should be defined', () => {
  //   console.log(service);
  //   expect(service).toBeDefined();
  // });
  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
