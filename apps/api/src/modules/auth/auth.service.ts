import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  login(dto: LoginDto) {
    return {
      user: {
        id: "user_demo",
        email: dto.email,
        role: "landlord"
      },
      accessToken: "dev-access-token",
      refreshToken: "dev-refresh-token"
    };
  }
}
