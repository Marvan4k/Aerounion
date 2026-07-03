import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, Req } from "@nestjs/common";
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
    async getHelicopters(
        @Query('limit') limit = 10,
        @Query('offset') offset = 0,
    ) {
        return this.helicoptersService.getHelicopters(Number(limit), Number(offset));
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

    @Get(":id")
    async getHelicopterById(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.helicoptersService.getHelicopterById(id);
    }
}