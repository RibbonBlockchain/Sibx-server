-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "expire" TIMESTAMP(3) NOT NULL,
    "validity" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "token_code_key" ON "token"("code");

-- AddForeignKey
ALTER TABLE "token" ADD CONSTRAINT "token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
