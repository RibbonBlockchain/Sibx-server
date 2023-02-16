import { BadRequestException, Injectable } from "@nestjs/common";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../../config";
import { Readable } from "stream";

@Injectable()
export class CloudinaryService {
  async uploadMedia(
    file: Express.Multer.File,
    folder: string
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    cloudinary.config(cloudinaryConfig);
    const uploadOptions = {
      use_filename: false,
      unique_filename: true,
      overwrite: false,
      allowed_formats: ["jpeg", "png", "jpg", "avif", "webp", "mp4"],
      folder,
    };

    try {
      return new Promise((resolve, reject) => {
        const upload = cloudinary.uploader.upload_stream(
          uploadOptions,
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        Readable.from(file.buffer).pipe(upload);
      });
    } catch (error) {
      throw new BadRequestException({
        name: "upload",
        message: "could not upload resource",
      });
    }
  }

  async deleteMedia(filename, resource_type): Promise<{ result: string }> {
    cloudinary.config(cloudinaryConfig);
    return await cloudinary.uploader.destroy(
      filename,
      { resource_type },
      (error, response) => {
        if (response.result === "ok") return true;
        else if (error) return false;
        return false;
      }
    );
  }
}
