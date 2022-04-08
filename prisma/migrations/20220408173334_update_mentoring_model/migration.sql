/*
  Warnings:

  - Added the required column `platform` to the `public_mentorings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public_mentorings" ADD COLUMN     "platform" TEXT NOT NULL,
ADD COLUMN     "theme" TEXT[];
