import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("bookings")
@Controller("bookings")
export class BookingsController {
  @Get("visits")
  visits() {
    return [
      {
        id: "visit_demo",
        propertyId: "pune-koregaon-2bhk",
        scheduledFor: "2026-06-20T11:00:00.000Z",
        status: "requested"
      }
    ];
  }

  @Post("visits")
  scheduleVisit(@Body() body: { propertyId: string; scheduledFor: string }) {
    return {
      id: "visit_new",
      status: "requested",
      ...body
    };
  }
}
