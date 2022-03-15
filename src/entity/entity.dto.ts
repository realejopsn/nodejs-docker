import { IsNumber, IsString } from "class-validator";

export class EntityDto {
    
    @IsNumber()
    entityId: number;
   
    @IsString()
    name: string;

    @IsString()
    identificationNumber: string;

    @IsString()
    expirationDate: string;

    @IsString()
    contactName: string;

    @IsString()
    contactEmail: string;

    @IsString()
    logo: string;
}