// import { CreateAdminDto } from '../dtos/create-admin.dto';
// import { EntityRepository, Repository } from 'typeorm';
// import { v4 as v4uuid } from 'uuid';
// import * as argon from 'argon2';
// import { User } from '../entities/user.entity';

// @EntityRepository(User)
// export class UserRepository extends Repository<User> {
//   public async createAdmin(dto: CreateAdminDto): Promise<User> {
//     const { email, password, firstName, lastName, phone, adminRoleId } = dto;
//     const salt = v4uuid();
//     const hash = await argon.hash(`${password}.${salt}`);

//     const admin = { salt: salt, passwordHash: '', firstName: '1', lastName: '2' };
//     const user: User = { email: email, admin };
//     return await this.create(user);
//   }
// }
