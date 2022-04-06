/*
  Warnings:

  - A unique constraint covering the columns `[postId,userId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId,userId]` on the table `Reaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Bookmark_postId_userId_key` ON `Bookmark`(`postId`, `userId`);

-- CreateIndex
CREATE UNIQUE INDEX `Reaction_postId_userId_key` ON `Reaction`(`postId`, `userId`);
