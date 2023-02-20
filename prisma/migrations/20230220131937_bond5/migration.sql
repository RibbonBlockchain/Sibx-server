/*
  Warnings:

  - You are about to drop the column `comapnyRegistrationNumber` on the `bond` table. All the data in the column will be lost.
  - Added the required column `companyRegistrationNumber` to the `bond` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bond" DROP COLUMN "comapnyRegistrationNumber",
ADD COLUMN     "companyRegistrationNumber" TEXT NOT NULL;
