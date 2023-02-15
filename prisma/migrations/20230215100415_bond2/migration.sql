/*
  Warnings:

  - You are about to drop the column `WebsiteUrl` on the `bond` table. All the data in the column will be lost.
  - Added the required column `websiteUrl` to the `bond` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bond" DROP COLUMN "WebsiteUrl",
ADD COLUMN     "websiteUrl" TEXT NOT NULL;
