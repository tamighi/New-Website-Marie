import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AbstractService } from "src/models/abstract/abstract.service";
import { Repository } from "typeorm";
import { UserDto } from "./dtos/user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService extends AbstractService<User, UserDto> {
  constructor(
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>
  ) {
    super(userRepository);
  }

  entityToDto(user: User): UserDto {
    const userDto: UserDto = new UserDto();

    userDto.id = user.id;
    userDto.identifier = user.identifier;
    userDto.password = user.password;

    return userDto;
  }

  async findOneByIdentifier(identifier: string) {
    const user: User | null = await this.repository.findOneBy({
      identifier: identifier,
    });


    return this.entityToDto(user);
  }
}
