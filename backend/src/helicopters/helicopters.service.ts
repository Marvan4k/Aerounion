import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Helicopters } from "./helicopters.entity";
import { CreateHelicopterDto } from "./dto/create-helicopters.dto";

@Injectable()
export class HelicoptersService {
    constructor(
        @InjectRepository(Helicopters) 
        private readonly helicoptersRepository : Repository<Helicopters>
    ) {}

    async createHelicopter(
        createHelicopterDto: CreateHelicopterDto
    ) : Promise<Helicopters>{
        const helicopter = this.helicoptersRepository.create(createHelicopterDto)
        
        return await this.helicoptersRepository.save(helicopter)
    }

    async getHelicopters(limit: number, offset: number){
        const [items, total] = await this.helicoptersRepository.findAndCount({
            take: limit,
            skip: offset,
            order: {
                id: 'ASC',
            },
        });

        return {
            items,
            total,
        };
    }
    
    async deleteHelicopter(id: string) : Promise<void> {
        const result = await this.helicoptersRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Helicopter with id ${id} not found`);
        }        
    }

}