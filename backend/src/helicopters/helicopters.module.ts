import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Helicopters } from "./helicopters.entity";
import { HelicoptersContoller } from "./helicopters.controller";
import { HelicoptersService } from "./helicopters.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Helicopters])
    ],
    controllers: [HelicoptersContoller],
    providers: [HelicoptersService],
    exports: [HelicoptersService],
})
export class HelicoptersModule {}