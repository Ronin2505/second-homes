import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("messaging")
@Controller("messages")
export class MessagingController {
  @Get("threads")
  threads() {
    return [
      {
        id: "thread_demo",
        propertyId: "pune-koregaon-2bhk",
        unreadCount: 2,
        lastMessage: "Can I visit this weekend?"
      }
    ];
  }
}
