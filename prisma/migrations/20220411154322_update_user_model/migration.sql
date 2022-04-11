-- AlterTable
ALTER TABLE "public_users" ADD COLUMN     "behance" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "graduations" TEXT[],
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "medium" TEXT,
ADD COLUMN     "twitter" TEXT;
