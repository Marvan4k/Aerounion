import { Body, Controller, Delete, Get, Param, Post, Req } from "@nestjs/common";
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

    @Get()
    async getHelicopters() {
        return this.helicoptersService.getHelicopters();
    }

    @Delete(':id')
    async deleteHelicopter(
        @Param('id') id: string
    ) {
        await this.helicoptersService.deleteHelicopter(id);

        return {
            message: 'Helicopter deleted successfully',
        };
    }
}