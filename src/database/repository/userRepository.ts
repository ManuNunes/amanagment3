import { EntityRepository, Repository } from "typeorm"
import Users from './../models/user'


@EntityRepository(Users)
class UsersRepository extends Repository<Users> { }

export { UsersRepository }

