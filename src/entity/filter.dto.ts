import { IsInt, Max, Min } from 'class-validator';

export class FilterDto {
  @IsInt()
  @Min(1)
  @Max(20)
  startId: number;

  @IsInt()
  @Min(1)
  @Max(20)
  endId: number;
}