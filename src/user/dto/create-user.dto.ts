import { IsString, IsInt, Min, Max, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AddressDto {
  @IsString({ message: 'A cidade deve ser uma string válida.' })
  city: string;

  @IsString({ message: 'O estado deve ser uma string válida.' })
  state: string;
}

export class CreateUserDto {
  @IsString({ message: 'O nome deve ser uma string válida.' })
  name: string;

  @IsInt({ message: 'A idade deve ser um número inteiro.' })
  @Min(15, { message: 'A idade mínima é 15 anos.' })
  @Max(150, { message: 'A idade máxima é 150 anos.' })
  @Type(() => Number)
  age: number;

  @IsString({ message: 'O email deve ser uma string valida' })
  email: string;

  @ValidateNested({ message: 'O endereço deve ser um objeto válido.' })
  @Type(() => AddressDto)
  address: AddressDto;
}
