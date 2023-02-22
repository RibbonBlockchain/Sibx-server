/*
  Warnings:

  - You are about to drop the column `bondName` on the `bond` table. All the data in the column will be lost.
  - Added the required column `name` to the `bond` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bond" DROP COLUMN "bondName",
ADD COLUMN     "name" TEXT NOT NULL;
