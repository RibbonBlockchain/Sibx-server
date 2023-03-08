/*
  Warnings:

  - Added the required column `tx_ref` to the `purchased_bond` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "purchased_bond" ADD COLUMN     "tx_ref" TEXT NOT NULL;
