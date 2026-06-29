import { Injectable } from "@nestjs/common";
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
    
}