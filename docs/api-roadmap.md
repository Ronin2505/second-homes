# API Roadmap

## Current Scaffold

- `AuthModule`: login response shape, future JWT and refresh token support.
- `UsersModule`: current-user profile endpoint.
- `PropertiesModule`: listing seed data and create endpoint.
- `SearchModule`: property search route and filter contract.
- `MediaModule`: presigned upload URL contract.
- `BookingsModule`: visit scheduling.
- `MessagingModule`: message thread placeholder.
- `PaymentsModule`: subscription plan catalog.
- `NotificationsModule`: supported channel catalog.
- `AdminModule`: moderation queue and analytics.

## Next Implementation Steps

1. Add Prisma or TypeORM with PostgreSQL migrations.
2. Implement real registration, login, refresh tokens, and email verification.
3. Add landlord KYC and admin approval workflow.
4. Persist properties and publish only approved listings.
5. Implement S3 presigned uploads with MIME and size validation.
6. Add favorites, inquiries, visits, and lead management.
7. Integrate Razorpay or Stripe India-compatible payment flow.
8. Add Redis-backed rate limiting and OTP storage.
