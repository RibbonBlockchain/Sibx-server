/*
  Warnings:

  - You are about to drop the column `firstName` on the `bond` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `bond` table. All the data in the column will be lost.
  - Added the required column `bondName` to the `bond` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bond" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "bondName" TEXT NOT NULL;
