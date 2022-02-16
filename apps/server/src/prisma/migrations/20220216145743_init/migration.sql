-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` TEXT NULL,
    `googleUserId` VARCHAR(191) NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `accountType` ENUM('PUBLIC', 'ANONYMOUS', 'PRIVATE') NOT NULL DEFAULT 'ANONYMOUS',
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `verificationExpires` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `loginAttempts` INTEGER NOT NULL DEFAULT 0,
    `blockExpires` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `active` BOOLEAN NOT NULL DEFAULT true,
    `lastLogin` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` VARCHAR(191) NOT NULL,
    `nickname` VARCHAR(191) NOT NULL,
    `bio` TEXT NULL,
    `mobileNo` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `gender` ENUM('MALE', 'FEMALE') NULL,
    `dob` DATETIME(3) NULL,
    `interestedIn` ENUM('MEN', 'FEMALE') NULL,
    `relationshipStatus` ENUM('SINGLE', 'ENGAGED', 'MARRIED', 'SEPERATED', 'DIVORCED', 'WIDOWED', 'ITS_COMPLICATED', 'IN_A_RELATIONSHIP') NULL,
    `website` TEXT NULL,
    `dpUrl` TEXT NULL,
    `userId` VARCHAR(191) NULL,

    UNIQUE INDEX `Profile_id_key`(`id`),
    UNIQUE INDEX `Profile_mobileNo_key`(`mobileNo`),
    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Settings` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NULL,

    UNIQUE INDEX `Settings_id_key`(`id`),
    UNIQUE INDEX `Settings_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Token` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `token` VARCHAR(3000) NOT NULL,
    `firstUsed` BOOLEAN NOT NULL DEFAULT false,
    `finalUsed` BOOLEAN NOT NULL DEFAULT false,
    `expires` DATETIME(3) NULL,
    `type` ENUM('REFRESH', 'ACCESS', 'VERIFICATION', 'FORGOT_PASSWORD') NOT NULL,
    `ip` VARCHAR(191) NOT NULL,
    `browser` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Token_id_key`(`id`),
    UNIQUE INDEX `Token_token_key`(`token`(191)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blocked` (
    `id` VARCHAR(191) NOT NULL,
    `sourceUserId` VARCHAR(191) NOT NULL,
    `targetUserId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Blocked_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `caption` TEXT NULL,
    `type` ENUM('POLL', 'PHOTO', 'VIDEO', 'CLIP', 'TEXTUAL', 'AUDIO') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `placeId` VARCHAR(191) NULL,
    `archive` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT true,
    `slug` VARCHAR(3000) NOT NULL,

    UNIQUE INDEX `Post_id_key`(`id`),
    UNIQUE INDEX `Post_slug_key`(`slug`(191)),
    INDEX `Post_archive_published_idx`(`archive`, `published`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Poll` (
    `id` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Poll_id_key`(`id`),
    UNIQUE INDEX `Poll_postId_key`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PollOption` (
    `id` VARCHAR(191) NOT NULL,
    `option` TEXT NOT NULL,
    `pollId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PollOption_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PollAnswer` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `pollId` VARCHAR(191) NOT NULL,
    `pollOptionId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PollAnswer_id_key`(`id`),
    UNIQUE INDEX `PollAnswer_userId_key`(`userId`),
    UNIQUE INDEX `PollAnswer_pollId_key`(`pollId`),
    UNIQUE INDEX `PollAnswer_pollOptionId_key`(`pollOptionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photo` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Photo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Video` (
    `id` VARCHAR(191) NOT NULL,
    `thumbnailUrl` TEXT NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Video_id_key`(`id`),
    UNIQUE INDEX `Video_postId_key`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClipAudio` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `audioUrl` TEXT NOT NULL,

    UNIQUE INDEX `ClipAudio_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clip` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,
    `thumbnailUrl` TEXT NOT NULL,
    `clipAudioId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clip_id_key`(`id`),
    UNIQUE INDEX `Clip_postId_key`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Textual` (
    `id` VARCHAR(191) NOT NULL,
    `text` TEXT NOT NULL,
    `postId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Textual_id_key`(`id`),
    UNIQUE INDEX `Textual_postId_key`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Audio` (
    `id` VARCHAR(191) NOT NULL,
    `url` TEXT NOT NULL,
    `postId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Audio_id_key`(`id`),
    UNIQUE INDEX `Audio_postId_key`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_id_key`(`id`),
    UNIQUE INDEX `Tag_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Place` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(3000) NOT NULL,

    UNIQUE INDEX `Place_id_key`(`id`),
    UNIQUE INDEX `Place_address_key`(`address`(191)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Like` (
    `id` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Like_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` VARCHAR(191) NOT NULL,
    `comment` TEXT NOT NULL,
    `postId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Comment_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommentReplies` (
    `id` VARCHAR(191) NOT NULL,
    `comment` TEXT NOT NULL,
    `repliedToId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CommentReplies_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Follower` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Follower_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Following` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Following_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FollowRequest` (
    `id` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NULL,
    `sourceUserId` VARCHAR(191) NOT NULL,
    `targetUserId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `FollowRequest_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NULL,
    `mediaUrl` TEXT NULL,
    `postId` VARCHAR(191) NULL,
    `storyId` VARCHAR(191) NULL,
    `sourceUserId` VARCHAR(191) NOT NULL,
    `targetUserId` VARCHAR(191) NOT NULL,
    `replyToId` VARCHAR(191) NULL,
    `mediaType` ENUM('TEXT', 'IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'POST', 'STORY') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Message_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Story` (
    `id` VARCHAR(191) NOT NULL,
    `mediaUrl` TEXT NOT NULL,
    `link` TEXT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Story_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('LIKED', 'COMMENTED', 'POSTED', 'SHARED') NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Activity_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PostToTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PostToTag_AB_unique`(`A`, `B`),
    INDEX `_PostToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
