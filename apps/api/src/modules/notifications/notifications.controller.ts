import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("notifications")
@Controller("notifications")
export class NotificationsController {
  @Get("channels")
  channels() {
    return ["email", "sms", "whatsapp", "push"];
  }
}
