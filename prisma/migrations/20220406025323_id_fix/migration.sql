-- CreateTable
CREATE TABLE "public_schedules" (
    "id" SERIAL NOT NULL,
    "schedule_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "public_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public_users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "skills" TEXT[],
    "mentor" BOOLEAN NOT NULL,

    CONSTRAINT "public_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_public_scheduleTopublic_user" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "public_users_email_key" ON "public_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_public_scheduleTopublic_user_AB_unique" ON "_public_scheduleTopublic_user"("A", "B");

-- CreateIndex
CREATE INDEX "_public_scheduleTopublic_user_B_index" ON "_public_scheduleTopublic_user"("B");

-- AddForeignKey
ALTER TABLE "_public_scheduleTopublic_user" ADD FOREIGN KEY ("A") REFERENCES "public_schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_public_scheduleTopublic_user" ADD FOREIGN KEY ("B") REFERENCES "public_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
