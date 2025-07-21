import { UserRepository } from "@/repositories/UserRepository";
import { HashService } from "@/types/HashService";
import { ICreateUser } from "@/types/user";
import { BadRequest } from "@/utils/customError";
import { generateToken } from "@/utils/generateToken";

export class RegisterUserService {
    constructor(private readonly userRepository: UserRepository, private readonly hashService: HashService) { }
    async execute(data: ICreateUser) {
        const existsUser = await this.userRepository.findOneBy({ email: data.email })
        if (existsUser) throw new BadRequest(`Usuário já cadastrado!`)

        const hashedPassword = await this.hashService.hash(data.password)
        const createdUser = await this.userRepository.create({ ...data, password: hashedPassword })
        const { password, ...rest } = createdUser

        const accessToken = generateToken({ id: createdUser.id, email: createdUser.email, name: createdUser.name })
        return { createdUser: rest, accessToken }
    }
}