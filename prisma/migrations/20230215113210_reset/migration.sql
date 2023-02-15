-- CreateEnum
CREATE TYPE "ACCOUNT_TYPE" AS ENUM ('INDIVIDUAL', 'ORGANIZATION');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accountType" "ACCOUNT_TYPE" NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bond" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "organizationName" TEXT NOT NULL,
    "organizationEmail" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "websiteUrl" TEXT NOT NULL,
    "comapnyRegistrationNumber" TEXT NOT NULL,
    "socialMedia" TEXT[],
    "organizationIncorporated" BOOLEAN NOT NULL,
    "organizationLegalEstablishmentDate" TEXT NOT NULL,
    "organizationRevenue" TEXT NOT NULL,
    "amountToRaise" TEXT NOT NULL,
    "reasonForRaisingMoney" TEXT NOT NULL,
    "organizationHasLegalDocs" BOOLEAN NOT NULL,
    "launchDate" TEXT NOT NULL,
    "serviceProvider" TEXT NOT NULL,
    "amountToBeRaised" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "projectIrr" TEXT NOT NULL,
    "maxOutcomePay" TEXT NOT NULL,
    "transactionFee" TEXT NOT NULL,
    "totalPlatformCost" TEXT NOT NULL,
    "policyArea" TEXT NOT NULL,
    "targetPopulation" TEXT NOT NULL,
    "independentEvaluator" TEXT NOT NULL,
    "overallObjectives" TEXT NOT NULL,
    "outcomeMetrics" TEXT NOT NULL,
    "outcomeTarget" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bond_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "expires" TEXT NOT NULL,
    "validity" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "token_code_key" ON "token"("code");

-- AddForeignKey
ALTER TABLE "bond" ADD CONSTRAINT "bond_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "token" ADD CONSTRAINT "token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
