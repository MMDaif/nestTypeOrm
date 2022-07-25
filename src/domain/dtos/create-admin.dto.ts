// import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsEmail()
  @IsNotEmpty()
  // @ApiProperty()
  email: string;
  @IsString()
  @IsNotEmpty()
  // @ApiProperty()
  password: string;
  @IsString()
  @IsNotEmpty()
  // @ApiProperty()
  firstName?: string;
  @IsString()
  @IsNotEmpty()
  lastName?: string;
  @IsString()
  @IsNotEmpty()
  // @ApiProperty()
  phone?: string;

  @IsString()
  @IsNotEmpty()
  adminRoleId: string;
}
