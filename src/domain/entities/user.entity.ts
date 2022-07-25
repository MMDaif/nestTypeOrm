import { Column, Entity, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import { Admin } from './admins/admin.entity';
import { BaseRecord } from './base-tables/base-record';

@Entity('users')
export class User extends BaseRecord {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false })
  email: string;

  @Column({ default: false })
  deleted?: boolean;
  @Column({ default: false })
  closed?: boolean;
  @Column({ default: true })
  isActive?: boolean;
  @OneToOne(() => Admin, (admin) => admin.user)
  // @JoinColumn({ referencedColumnName: 'id', name: 'id' })
  admin?: Admin;
}
