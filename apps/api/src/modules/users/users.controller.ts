import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
  @Get("me")
  me() {
    return {
      id: "user_demo",
      name: "Demo Landlord",
      role: "landlord",
      verified: false
    };
  }
}
