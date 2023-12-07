import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class UpdateCatDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(20)
  readonly age?: number;

  @IsOptional()
  @IsString()
  readonly breed?: string;
}
