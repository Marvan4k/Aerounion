import { IsNumber, IsString } from "@nestjs/class-validator";


export class CreateHelicopterDto {
  @IsString()
  name!: string;

  @IsString()
  manufacturer!: string;

  @IsString()
  description!: string;

  @IsNumber()
  price!: number;

  @IsNumber()
  maxSpeed!: number;

  @IsNumber()
  capacity!: number;

  @IsNumber()
  range!: number;

  @IsNumber()
  flightTime!: number;

  @IsString()
  previewImage!: string;

  @IsString()
  modelUrl!: string;
}