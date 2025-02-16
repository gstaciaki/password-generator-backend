import { IsOptional, IsString } from 'class-validator';

export class CreatePasswordDto {
  @IsString({ message: 'Email deve ser uma string valida' })
  accountEmail: string;

  @IsString({ message: 'Titulo da senha deve ser uma string valida' })
  passwordAlias: string;

  @IsOptional()
  @IsString({ message: 'Descricao deve ser uma string valida' })
  description?: string;
}

export class UpdatePasswordDto {
  @IsOptional()
  @IsString({ message: 'Email deve ser uma string valida' })
  accountEmail?: string;

  @IsOptional()
  @IsString({ message: 'Titulo da senha deve ser uma string valida' })
  passwordAlias?: string;

  @IsOptional()
  @IsString({ message: 'Descricao deve ser uma string valida' })
  description?: string;
}
