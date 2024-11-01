import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'El nombre del usuario' })
  name: string;

  @ApiProperty({ description: 'El correo electrónico del usuario', uniqueItems: true })
  email: string;

  @ApiProperty({ description: 'La contraseña del usuario' })
  password: string;
}

export class UpdateUserDto {
  @ApiProperty({ description: 'El nombre del usuario', required: false })
  name?: string;

  @ApiProperty({ description: 'El correo electrónico del usuario', required: false })
  email?: string;

  @ApiProperty({ description: 'La contraseña del usuario', required: false })
  password?: string;
}
