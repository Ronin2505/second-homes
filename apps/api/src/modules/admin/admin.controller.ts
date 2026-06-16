import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("admin")
@Controller("admin")
export class AdminController {
  @Get("queue")
  queue() {
    return [
      { id: "kyc_1", type: "landlord_verification", priority: "high" },
      { id: "listing_1", type: "property_moderation", priority: "medium" },
      { id: "payment_1", type: "revenue_review", priority: "low" }
    ];
  }

  @Get("analytics")
  analytics() {
    return {
      users: 1420,
      publishedProperties: 318,
      monthlyRevenue: 240000,
      leadConversionRate: 0.18
    };
  }
}
