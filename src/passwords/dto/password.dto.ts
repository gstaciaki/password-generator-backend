import { IsOptional, IsString } from 'class-validator';

export class CreatePasswordDtoInput {
  @IsString({ message: 'Email deve ser uma string valida' })
  accountEmail: string;

  @IsString({ message: 'Titulo da senha deve ser uma string valida' })
  passwordAlias: string;

  @IsOptional()
  @IsString({ message: 'Descricao deve ser uma string valida' })
  description?: string;
}

export class CreatePasswordDtoOutput {
  accountEmail: string;
  alias: string;
  description?: string;
}

export class UpdatePasswordDtoInput {
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

export class UpdatePasswordDtoOutput {
  accountEmail?: string;
  passwordAlias?: string;
  description?: string;
}
