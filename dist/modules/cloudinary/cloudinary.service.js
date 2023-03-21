"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const config_1 = require("../../config");
const stream_1 = require("stream");
let CloudinaryService = class CloudinaryService {
    async uploadMedia(file, folder) {
        cloudinary_1.v2.config(config_1.cloudinaryConfig);
        const uploadOptions = {
            use_filename: false,
            unique_filename: true,
            overwrite: false,
            allowed_formats: ["jpeg", "png", "jpg", "avif", "webp", "mp4"],
            folder,
        };
        try {
            return new Promise((resolve, reject) => {
                const upload = cloudinary_1.v2.uploader.upload_stream(uploadOptions, (error, result) => {
                    if (error)
                        return reject(error);
                    resolve(result);
                });
                stream_1.Readable.from(file.buffer).pipe(upload);
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({
                name: "upload",
                message: "could not upload resource",
            });
        }
    }
    async deleteMedia(filename, resource_type) {
        cloudinary_1.v2.config(config_1.cloudinaryConfig);
        return await cloudinary_1.v2.uploader.destroy(filename, { resource_type }, (error, response) => {
            if (response.result === "ok")
                return true;
            else if (error)
                return false;
            return false;
        });
    }
};
CloudinaryService = __decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=cloudinary.service.js.map