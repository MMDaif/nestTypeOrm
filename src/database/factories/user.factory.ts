import { User } from '../../domain/entities/user.entity';
import { setSeederFactory } from 'typeorm-extension';
import { Admin } from 'src/domain/entities/admins';


export default setSeederFactory(User, (faker) => {
    const user = new User();
    user.admin = new Admin()

    user.admin.firstName = faker.name.firstName('male');
    user.admin.lastName = faker.name.lastName('male');
    user.admin.phone = faker.phone.number()
    user.email = faker.internet.email(user.admin.firstName, user.admin.lastName);

    return user;
})