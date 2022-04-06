/*
  Warnings:

  - The primary key for the `public_schedules` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `public_users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_public_scheduleTopublic_user" DROP CONSTRAINT "_public_scheduleTopublic_user_A_fkey";

-- DropForeignKey
ALTER TABLE "_public_scheduleTopublic_user" DROP CONSTRAINT "_public_scheduleTopublic_user_B_fkey";

-- AlterTable
ALTER TABLE "_public_scheduleTopublic_user" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public_schedules" DROP CONSTRAINT "public_schedules_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "public_schedules_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "public_schedules_id_seq";

-- AlterTable
ALTER TABLE "public_users" DROP CONSTRAINT "public_users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "public_users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "public_users_id_seq";

-- AddForeignKey
ALTER TABLE "_public_scheduleTopublic_user" ADD FOREIGN KEY ("A") REFERENCES "public_schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_public_scheduleTopublic_user" ADD FOREIGN KEY ("B") REFERENCES "public_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
