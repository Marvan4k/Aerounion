import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelicoptersModule } from './helicopters/helicopters.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'aerounion',
      autoLoadEntities: true,
      synchronize: true,
    }),
    HelicoptersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
