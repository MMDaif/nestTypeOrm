import { User } from '../../domain/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeder, Seeder, SeederFactoryManager , SeederFactory} from 'typeorm-extension';
import userFactory from '../factories/user.factory';

export class UserSeeder implements Seeder {
    async  run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
      await factoryManager.get(User).saveMany(100);
    }
  
}

