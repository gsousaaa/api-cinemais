import { UserRepository } from "@/repositories/UserRepository";
import { HashService } from "@/types/HashService";
import { BadRequest } from "@/utils/customError";
import { generateToken } from "@/utils/generateToken";

export class LoginService {
    constructor(private readonly userRepository: UserRepository, private readonly hashService: HashService) { }
    async execute(data: { email: string, password: string }) {
        const existsUser = await this.userRepository.findOneBy({ email: data.email })
        if (!existsUser) throw new BadRequest(`Usuário e/ou senha incorretos!`)

        const matchPassword = await this.hashService.compare(data.password, existsUser.password)
        if (!matchPassword) throw new BadRequest(`Usuário e/ou senha incorretos!`)

        const accessToken = generateToken({ id: existsUser.id, email: existsUser.email, name: existsUser.name })
        return { userId: existsUser.id, accessToken }
    }
}