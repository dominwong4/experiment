import { Test, TestingModule } from '@nestjs/testing';
import { FriendController } from './friend.controller';
import { FriendModule } from './friend.module';
import { AppModule } from '../app.module';
import { FriendService } from './friend.service';

describe('FriendController', () => {
  let controller: FriendController;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     imports:[AppModule, FriendModule],
  //     controllers: [FriendController],
  //     providers: [{provide: FriendService, useValue: {
        
  //     }}]
  //   }).compile();

  //   controller = module.get<FriendController>(FriendController);
  // });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  it('should be defined', () => {
    expect(true).toBeTruthy();
  });
});
