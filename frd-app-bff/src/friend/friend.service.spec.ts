import { Test, TestingModule } from '@nestjs/testing';
import { FriendService } from './friend.service';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { Friend } from './friend.interface';

describe('FriendService', () => {
  let service: FriendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CacheModule.register({isGlobal:true, store:'memory'}), ConfigModule.forRoot({
        isGlobal:true,
        envFilePath:'.env'
      })],
      providers: [FriendService,{ provide: CACHE_MANAGER, useValue: {
          get: jest.fn(),
          set: jest.fn(),
          store:{
            get: jest.fn(),
            set: jest.fn(),
          }
      } }],
    }).compile();

    service = module.get<FriendService>(FriendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  let friend: Friend | null;

  it('should return an array of friends', async () => {
    const friends = await service.getFirendsData();
    expect(friends).toBeInstanceOf(Array);
    friend = friends[0];
  });


  it('should return a friends', async () => {
    const friendResult = await service.getFriendById(friend._id);
    expect(friendResult).toBeDefined();
  });
});
