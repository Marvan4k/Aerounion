import { Body, Controller, Post, Req } from "@nestjs/common";
import { HelicoptersService } from "./helicopters.service";
import { CreateHelicopterDto } from "./dto/create-helicopters.dto";

@Controller('helicopters')
export class HelicoptersContoller {
    constructor(private readonly helicoptersService : HelicoptersService) {}

    @Post()
    async addHelicopter(
        @Body() createHelicopterDto: CreateHelicopterDto,
    ) {
        return this.helicoptersService.createHelicopter(createHelicopterDto);
    }
}