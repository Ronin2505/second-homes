import { Module } from "@nestjs/common";
import { AdminModule } from "./modules/admin/admin.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BookingsModule } from "./modules/bookings/bookings.module";
import { HealthModule } from "./modules/health/health.module";
import { MediaModule } from "./modules/media/media.module";
import { MessagingModule } from "./modules/messaging/messaging.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { PaymentsModule } from "./modules/payments/payments.module";
import { PropertiesModule } from "./modules/properties/properties.module";
import { SearchModule } from "./modules/search/search.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    HealthModule,
    AuthModule,
    UsersModule,
    PropertiesModule,
    SearchModule,
    MediaModule,
    BookingsModule,
    MessagingModule,
    PaymentsModule,
    NotificationsModule,
    AdminModule
  ]
})
export class AppModule {}
