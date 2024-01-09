import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({
    example: 'john@doe.com',
    description: 'O email do usuário',
    format: 'email',
  })
  username: string;

  @ApiProperty({
    example: 'senha123',
    description: 'A senha do usuário',
    minLength: 6,
    maxLength: 20,
  })
  password: string;
}
