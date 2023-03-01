-- CreateEnum
CREATE TYPE "PAYMENT_TYPE" AS ENUM ('CARD', 'WALLET', 'CRYPTO');

-- CreateTable
CREATE TABLE "purchased_bond" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "bondId" INTEGER,
    "amount" INTEGER NOT NULL,
    "paymentType" "PAYMENT_TYPE" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchased_bond_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "purchased_bond" ADD CONSTRAINT "purchased_bond_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchased_bond" ADD CONSTRAINT "purchased_bond_bondId_fkey" FOREIGN KEY ("bondId") REFERENCES "bond"("id") ON DELETE SET NULL ON UPDATE CASCADE;
