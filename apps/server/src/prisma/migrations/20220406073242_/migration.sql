/*
  Warnings:

  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Comment` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `CommentReplies` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `Like`;

-- CreateTable
CREATE TABLE `Bookmark` (
    `id` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Bookmark_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reaction` (
    `id` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `reaction` ENUM('LIKE', 'LAUGH', 'COOL', 'FIRE', 'CELEBRATE') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Reaction_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
