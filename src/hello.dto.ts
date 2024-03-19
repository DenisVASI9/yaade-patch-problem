import { IsString } from 'class-validator';

export class PatchHelloDto {
  @IsString()
  name: string;
}
