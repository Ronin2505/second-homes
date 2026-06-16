# Second Homes

Second Homes is a production-minded rental marketplace for tenants, landlords, and admins.

## Apps

- `apps/web`: Next.js tenant, landlord, and admin experience.
- `apps/api`: NestJS backend scaffold for auth, users, properties, media, bookings, payments, and admin workflows.
- `packages/shared`: Shared TypeScript domain types.

## First MVP

- Tenant search and property detail discovery.
- Landlord dashboard and listing upload path.
- Admin moderation and verification surface.
- Clean module boundaries for auth, properties, media, bookings, subscriptions, and notifications.

## Run

```bash
npm install
npm run dev
```

The web app runs on `http://localhost:3000`.
