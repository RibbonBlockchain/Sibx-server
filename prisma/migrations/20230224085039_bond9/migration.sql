/*
  Warnings:

  - Added the required column `description` to the `bond` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facebookLink` to the `bond` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagramLink` to the `bond` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedinLink` to the `bond` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other` to the `bond` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twitterLink` to the `bond` table without a default value. This is not possible if the table is not empty.
  - Added the required column `websiteLink` to the `bond` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bond" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "facebookLink" TEXT NOT NULL,
ADD COLUMN     "instagramLink" TEXT NOT NULL,
ADD COLUMN     "linkedinLink" TEXT NOT NULL,
ADD COLUMN     "other" TEXT NOT NULL,
ADD COLUMN     "twitterLink" TEXT NOT NULL,
ADD COLUMN     "websiteLink" TEXT NOT NULL;
