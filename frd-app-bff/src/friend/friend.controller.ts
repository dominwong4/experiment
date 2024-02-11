import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FriendService } from './friend.service';
import { Response } from 'express';

@ApiTags('Friend')
@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}
  @Get()
  async getFriendsData(@Res() response: Response): Promise<Response> {
    const firends = await this.friendService.getFirendsData();
    return response.status(200).json(firends);
  }

  @Get(':id')
  async getFriendById(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<Response> {
    const firend = await this.friendService.getFriendById(id);
    return response.status(200).json(firend);
  }
}
