/*
  Warnings:

  - Added the required column `category` to the `bond` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BOND_CATEGORY" AS ENUM ('FIAT', 'TOKENIZED', 'BOTH');

-- AlterTable
ALTER TABLE "bond" ADD COLUMN     "category" "BOND_CATEGORY" NOT NULL;
