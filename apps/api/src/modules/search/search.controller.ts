import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("search")
@Controller("search")
export class SearchController {
  @Get("properties")
  properties(@Query("q") query = "", @Query("city") city = "") {
    return {
      query,
      city,
      filters: ["price", "bedrooms", "furnished", "parking", "petFriendly"],
      strategy: "postgres_full_text_search"
    };
  }
}
