/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
export declare class CloudinaryService {
    uploadMedia(file: Express.Multer.File, folder: string): Promise<UploadApiResponse | UploadApiErrorResponse>;
    deleteMedia(filename: any, resource_type: any): Promise<{
        result: string;
    }>;
}
