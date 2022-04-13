/*
  Warnings:

  - You are about to drop the column `mentor` on the `public_users` table. All the data in the column will be lost.
  - You are about to drop the `_public_scheduleTopublic_user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `public_schedules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_public_scheduleTopublic_user" DROP CONSTRAINT "_public_scheduleTopublic_user_A_fkey";

-- DropForeignKey
ALTER TABLE "_public_scheduleTopublic_user" DROP CONSTRAINT "_public_scheduleTopublic_user_B_fkey";

-- AlterTable
ALTER TABLE "public_users" DROP COLUMN "mentor",
ADD COLUMN     "available" BOOLEAN,
ADD COLUMN     "availableDates" TIMESTAMP(3)[],
ADD COLUMN     "biography" TEXT,
ADD COLUMN     "interests" TEXT[],
ADD COLUMN     "role" TEXT,
ADD COLUMN     "seniority" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- DropTable
DROP TABLE "_public_scheduleTopublic_user";

-- DropTable
DROP TABLE "public_schedules";

-- CreateTable
CREATE TABLE "public_mentorings" (
    "id" TEXT NOT NULL,
    "schedule_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "feedback" TEXT,

    CONSTRAINT "public_mentorings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_public_mentoringTopublic_user" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_public_mentoringTopublic_user_AB_unique" ON "_public_mentoringTopublic_user"("A", "B");

-- CreateIndex
CREATE INDEX "_public_mentoringTopublic_user_B_index" ON "_public_mentoringTopublic_user"("B");

-- AddForeignKey
ALTER TABLE "_public_mentoringTopublic_user" ADD FOREIGN KEY ("A") REFERENCES "public_mentorings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_public_mentoringTopublic_user" ADD FOREIGN KEY ("B") REFERENCES "public_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
