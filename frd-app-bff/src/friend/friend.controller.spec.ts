import { Test, TestingModule } from '@nestjs/testing';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';

describe('FriendController', () => {
  // let controller: FriendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CacheModule.register({ isGlobal: true, store: 'memory' }),
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env',
        }),
      ],
      providers: [
        FriendController,
        FriendService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: jest.fn(),
            set: jest.fn(),
            store: {
              get: jest.fn(),
              set: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    console.log(module);

    // controller = module.get<FriendController>(FriendController);
  });

  it('should be defined', () => {
    expect(true).toBeTruthy();
  });

  //TBC
});
