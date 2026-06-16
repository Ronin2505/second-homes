import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("payments")
@Controller("payments")
export class PaymentsController {
  @Get("plans")
  plans() {
    return [
      { id: "bronze", name: "Bronze", monthlyPrice: 499, listingBoosts: 1 },
      { id: "silver", name: "Silver", monthlyPrice: 999, listingBoosts: 4 },
      { id: "gold", name: "Gold", monthlyPrice: 1999, listingBoosts: 10 }
    ];
  }
}
