export type UserRole = "tenant" | "landlord" | "admin";

export type PropertyStatus = "draft" | "pending_review" | "published" | "rejected";

export type PropertyMediaType = "image" | "video" | "thumbnail";

export type Furnishing = "unfurnished" | "semi_furnished" | "fully_furnished";

export interface PropertySummary {
  id: string;
  title: string;
  city: string;
  locality: string;
  rentPerMonth: number;
  bedrooms: number;
  bathrooms: number;
  furnishing: Furnishing;
  parking: boolean;
  petFriendly: boolean;
  coverImageUrl: string;
  status: PropertyStatus;
}

export interface LeadSummary {
  id: string;
  tenantName: string;
  propertyTitle: string;
  intent: "visit" | "inquiry" | "reserve";
  createdAt: string;
}
