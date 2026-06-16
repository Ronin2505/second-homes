import { IsBoolean, IsIn, IsInt, IsString, Min } from "class-validator";

export class CreatePropertyDto {
  @IsString()
  title!: string;

  @IsString()
  city!: string;

  @IsString()
  locality!: string;

  @IsInt()
  @Min(0)
  rentPerMonth!: number;

  @IsInt()
  @Min(0)
  bedrooms!: number;

  @IsInt()
  @Min(0)
  bathrooms!: number;

  @IsIn(["unfurnished", "semi_furnished", "fully_furnished"])
  furnishing!: "unfurnished" | "semi_furnished" | "fully_furnished";

  @IsBoolean()
  parking!: boolean;

  @IsBoolean()
  petFriendly!: boolean;
}
