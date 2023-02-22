/*
  Warnings:

  - Changed the type of `amountToRaise` on the `bond` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `duration` on the `bond` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `projectIrr` on the `bond` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `maxOutcomePay` on the `bond` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `transactionFee` on the `bond` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `totalPlatformCost` on the `bond` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `targetPopulation` on the `bond` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bond" DROP COLUMN "amountToRaise",
ADD COLUMN     "amountToRaise" INTEGER NOT NULL,
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL,
DROP COLUMN "projectIrr",
ADD COLUMN     "projectIrr" DOUBLE PRECISION NOT NULL,
DROP COLUMN "maxOutcomePay",
ADD COLUMN     "maxOutcomePay" INTEGER NOT NULL,
DROP COLUMN "transactionFee",
ADD COLUMN     "transactionFee" INTEGER NOT NULL,
DROP COLUMN "totalPlatformCost",
ADD COLUMN     "totalPlatformCost" INTEGER NOT NULL,
DROP COLUMN "targetPopulation",
ADD COLUMN     "targetPopulation" INTEGER NOT NULL;
