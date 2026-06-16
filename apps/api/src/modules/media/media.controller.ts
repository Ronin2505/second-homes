import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("media")
@Controller("media")
export class MediaController {
  @Post("upload-url")
  createUploadUrl(@Body() body: { fileName: string; contentType: string }) {
    return {
      key: `properties/dev/${body.fileName}`,
      uploadUrl: "https://s3-presigned-upload-url.example/dev",
      contentType: body.contentType,
      nextStep: "upload_directly_to_s3_then_enqueue_processing"
    };
  }
}
