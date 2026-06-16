import {
  BarChart3,
  Building2,
  CalendarCheck,
  Camera,
  CheckCircle2,
  Heart,
  IndianRupee,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  UploadCloud,
  Users
} from "lucide-react";
import type { PropertySummary } from "@second-homes/shared";
import { Button } from "@/components/ui/button";

const properties: PropertySummary[] = [
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
    coverImageUrl:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80",
    status: "published"
  },
  {
    id: "blr-indiranagar-studio",
    title: "Premium studio with metro access",
    city: "Bengaluru",
    locality: "Indiranagar",
    rentPerMonth: 28500,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi_furnished",
    parking: false,
    petFriendly: false,
    coverImageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    status: "published"
  },
  {
    id: "hyd-gachibowli-3bhk",
    title: "Family 3 BHK close to tech parks",
    city: "Hyderabad",
    locality: "Gachibowli",
    rentPerMonth: 56000,
    bedrooms: 3,
    bathrooms: 3,
    furnishing: "fully_furnished",
    parking: true,
    petFriendly: true,
    coverImageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    status: "published"
  }
];

const filters = ["City", "Locality", "Price", "Bedrooms", "Furnished", "Parking", "Pet friendly"];

const landlordStats = [
  { label: "Active listings", value: "18", icon: Building2 },
  { label: "Tenant leads", value: "124", icon: Users },
  { label: "Visits scheduled", value: "32", icon: CalendarCheck },
  { label: "Premium revenue", value: "₹86k", icon: IndianRupee }
];

const adminQueue = [
  "Verify landlord KYC",
  "Review pending listing media",
  "Resolve duplicate property report",
  "Approve premium listing payment"
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold">Second Homes</p>
              <p className="text-xs text-muted-foreground">Rental marketplace</p>
            </div>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            {["Search", "Landlords", "Admin", "Pricing"].map((item) => (
              <Button key={item} variant="ghost" size="sm">
                {item}
              </Button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              Login
            </Button>
            <Button size="sm">
              <UploadCloud className="h-4 w-4" />
              List property
            </Button>
          </div>
        </div>
      </header>

      <section className="border-b border-border bg-[linear-gradient(180deg,#ffffff_0%,#eef6f3_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex w-fit items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-muted-foreground shadow-soft">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Verified landlords, moderated listings
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Find verified rental homes without endless broker calls.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              Search homes, view real media, schedule visits, and contact landlords directly from one
              production-ready marketplace.
            </p>
            <div className="mt-7 rounded-md border border-border bg-white p-3 shadow-soft">
              <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                <label className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input className="w-full bg-transparent outline-none" placeholder="City or locality" />
                </label>
                <label className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-3">
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                  <input className="w-full bg-transparent outline-none" placeholder="Monthly budget" />
                </label>
                <Button className="h-12">
                  <SlidersHorizontal className="h-4 w-4" />
                  Search
                </Button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <span
                    className="rounded-md border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
                    key={filter}
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {properties.slice(0, 2).map((property) => (
              <PropertyCard key={property.id} property={property} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Tenant search</p>
            <h2 className="mt-1 text-2xl font-bold">Featured verified homes</h2>
          </div>
          <Button variant="secondary">
            <MapPin className="h-4 w-4" />
            Open map view
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Landlord OS</p>
            <h2 className="mt-1 text-2xl font-bold">Upload, qualify leads, and monetize listings.</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              The landlord dashboard starts with listing upload, direct S3 media flow, inquiry
              tracking, scheduled visits, and subscription upgrades.
            </p>
            <div className="mt-5 flex gap-3">
              <Button>
                <Camera className="h-4 w-4" />
                Upload listing
              </Button>
              <Button variant="secondary">
                <MessageSquare className="h-4 w-4" />
                View leads
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {landlordStats.map((stat) => (
              <div className="rounded-md border border-border bg-background p-5" key={stat.label}>
                <stat.icon className="h-5 w-5 text-primary" />
                <p className="mt-4 text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Admin command center</p>
          <h2 className="mt-1 text-2xl font-bold">Moderation, verification, and revenue controls.</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {adminQueue.map((item) => (
              <div className="flex items-center gap-3 rounded-md border border-border bg-white p-4" key={item}>
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-border bg-[#172321] p-5 text-white">
          <BarChart3 className="h-6 w-6 text-accent" />
          <p className="mt-6 text-4xl font-bold">₹2.4L</p>
          <p className="mt-2 text-sm text-white/70">Projected monthly platform revenue from subscriptions, premium listings, and qualified tenant leads.</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
            {["Bronze", "Silver", "Gold"].map((tier) => (
              <div className="rounded-md bg-white/10 px-2 py-3" key={tier}>
                {tier}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PropertyCard({ property, compact = false }: { property: PropertySummary; compact?: boolean }) {
  return (
    <article className="overflow-hidden rounded-md border border-border bg-white shadow-soft">
      <div
        className={compact ? "h-52 bg-cover bg-center" : "h-48 bg-cover bg-center"}
        style={{ backgroundImage: `url(${property.coverImageUrl})` }}
      >
        <div className="flex h-full items-start justify-between p-3">
          <span className="rounded-md bg-white px-2 py-1 text-xs font-bold text-primary">Verified</span>
          <button className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-foreground" aria-label="Save property">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold">{property.title}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {property.locality}, {property.city}
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-sm font-semibold">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            4.8
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold">₹{property.rentPerMonth.toLocaleString("en-IN")}</p>
            <p className="text-xs text-muted-foreground">per month</p>
          </div>
          <p className="text-sm font-medium">
            {property.bedrooms} bed · {property.bathrooms} bath
          </p>
        </div>
      </div>
    </article>
  );
}
