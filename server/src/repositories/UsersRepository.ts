import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async exists(email: string) {
    const howManyExists = await this.count({ where: { email } });

    return !!howManyExists;
  }
}

export default UsersRepository;
