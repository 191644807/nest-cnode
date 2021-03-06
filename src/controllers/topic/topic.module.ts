import { Module } from '@nestjs/common';
import {
  ReplyModelModule,
  TopicCollectModelModule,
  TopicModelModule,
  UserModelModule,
} from 'src/models';
import { TopicController } from './topic.controller';
import { TopicService } from './topic.service';

@Module({
  imports: [
    TopicModelModule,
    ReplyModelModule,
    UserModelModule,
    TopicCollectModelModule,
  ],
  providers: [TopicService],
  controllers: [TopicController],
})
export class TopicModule {}
