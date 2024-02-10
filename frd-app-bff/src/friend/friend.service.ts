import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Cache } from 'cache-manager';
import { RedisStore } from 'cache-manager-redis-store';
import type { Friend } from './friend.interface';

@Injectable()
export class FriendService {
    private readonly redisStore!: RedisStore;
    constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {
      this.redisStore = this.cache.store as unknown as RedisStore;
    }
    async getFirendsData(): Promise<Array<Friend>> {
        const cachedData = await this.redisStore.get('friends', {}, null);
        if(cachedData) return cachedData;
        
        try{
            const response = await axios.get(process.env.BASE_API_ENDPOINT,{
                headers:{
                    Authorization: `Bearer ${process.env.BASE_API_KEY}`
                }
            })
            if(response.data){
                await this.redisStore.set('friends', response.data, {
                    ttl:30
                }, null);

            }
            return response.data;
        }catch (e){
            console.log(e)
        }
    }
    async getFriendById(id: string): Promise<Friend> {
        const firends = await this.getFirendsData()
        const firend = firends.find(friend=>friend._id == id);
        return firend

    }
}
