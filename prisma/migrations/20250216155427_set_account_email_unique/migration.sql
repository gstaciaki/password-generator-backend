/*
  Warnings:

  - A unique constraint covering the columns `[accountEmail]` on the table `Password` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Password_accountEmail_key` ON `Password`(`accountEmail`);
