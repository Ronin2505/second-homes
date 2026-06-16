import { Injectable, NotFoundException } from "@nestjs/common";
import type { PropertySummary } from "@second-homes/shared";
import { CreatePropertyDto } from "./dto/create-property.dto";

const seedProperties: PropertySummary[] = [
  {
    id: "pune-koregaon-2bhk",
    title: "Sunny 2 BHK near Koregaon Park",
    city: "Pune",
    locality: "Koregaon Park",
    rentPerMonth: 42000,
    bedrooms: 2,
    bathrooms: 2,
    furnishing: "fully_furnished",
    parking: true,
    petFriendly: true,
    coverImageUrl: "https://images.unsplash.com/photo-1560185008-b033106af5c3",
    status: "published"
  }
];

@Injectable()
export class PropertiesService {
  findAll() {
    return seedProperties;
  }

  findOne(id: string) {
    const property = seedProperties.find((item) => item.id === id);
    if (!property) {
      throw new NotFoundException("Property not found");
    }
    return property;
  }

  create(dto: CreatePropertyDto) {
    return {
      id: dto.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      ...dto,
      coverImageUrl: "",
      status: "pending_review"
    };
  }
}
