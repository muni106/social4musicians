/*
  Warnings:

  - You are about to drop the column `realesedate` on the `album` table. All the data in the column will be lost.
  - You are about to drop the column `participantid` on the `chat` table. All the data in the column will be lost.
  - The primary key for the `chat_participant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `participantid` on the `chat_participant` table. All the data in the column will be lost.
  - The primary key for the `hashtag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nickname` on the `hashtag` table. All the data in the column will be lost.
  - You are about to drop the column `participantid` on the `message` table. All the data in the column will be lost.
  - The primary key for the `post_reference` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `vote` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `musician` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `release` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `writing` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `releasedate` to the `album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chatid` to the `chat_participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discussiontext` to the `discussion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `discussion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestampmessage` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releasedate` to the `song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chat_participant" DROP CONSTRAINT "chat_participant_nickname_fkey";

-- DropForeignKey
ALTER TABLE "follow" DROP CONSTRAINT "follow_nickname_fkey";

-- DropForeignKey
ALTER TABLE "hashtag" DROP CONSTRAINT "hashtag_nickname_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_chatid_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_participantid_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_commentid_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_discussionid_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_nickname_fkey";

-- DropForeignKey
ALTER TABLE "post_reference" DROP CONSTRAINT "post_reference_hashtagname_fkey";

-- DropForeignKey
ALTER TABLE "reaction" DROP CONSTRAINT "reaction_nickname_fkey";

-- DropForeignKey
ALTER TABLE "release" DROP CONSTRAINT "release_albumid_fkey";

-- DropForeignKey
ALTER TABLE "release" DROP CONSTRAINT "release_bandname_fkey";

-- DropForeignKey
ALTER TABLE "release" DROP CONSTRAINT "release_nickname_fkey";

-- DropForeignKey
ALTER TABLE "writing" DROP CONSTRAINT "writing_bandname_fkey";

-- DropForeignKey
ALTER TABLE "writing" DROP CONSTRAINT "writing_nickname_fkey";

-- DropForeignKey
ALTER TABLE "writing" DROP CONSTRAINT "writing_songid_fkey";

-- DropIndex
DROP INDEX "album_albumid_key";

-- DropIndex
DROP INDEX "chat_participant_entrydate_key";

-- DropIndex
DROP INDEX "chat_participant_exitdate_key";

-- AlterTable
ALTER TABLE "album" DROP COLUMN "realesedate",
ADD COLUMN     "bandname" VARCHAR(10),
ADD COLUMN     "nickname" VARCHAR(16),
ADD COLUMN     "releasedate" DATE NOT NULL,
ADD CONSTRAINT "album_pkey" PRIMARY KEY ("albumid");

-- AlterTable
ALTER TABLE "chat" DROP COLUMN "participantid",
ALTER COLUMN "chatname" SET DATA TYPE VARCHAR(32);

-- AlterTable
ALTER TABLE "chat_participant" DROP CONSTRAINT "chat_participant_pkey",
DROP COLUMN "participantid",
ADD COLUMN     "chatid" INTEGER NOT NULL,
ADD CONSTRAINT "chat_participant_pkey" PRIMARY KEY ("chatid", "nickname");

-- AlterTable
ALTER TABLE "comment" ADD COLUMN     "nickname" VARCHAR(16) NOT NULL,
ALTER COLUMN "commenttext" SET DATA TYPE VARCHAR(64);

-- AlterTable
ALTER TABLE "discussion" ADD COLUMN     "discussiontext" VARCHAR(400) NOT NULL,
ADD COLUMN     "nickname" VARCHAR(16) NOT NULL,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(64);

-- AlterTable
ALTER TABLE "hashtag" DROP CONSTRAINT "hashtag_pkey",
DROP COLUMN "nickname",
ALTER COLUMN "hashtagname" SET DATA TYPE VARCHAR(20),
ADD CONSTRAINT "hashtag_pkey" PRIMARY KEY ("hashtagname");

-- AlterTable
ALTER TABLE "message" DROP COLUMN "participantid",
ADD COLUMN     "nickname" VARCHAR(16) NOT NULL,
ADD COLUMN     "timestampmessage" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "post_reference" DROP CONSTRAINT "post_reference_pkey",
ALTER COLUMN "hashtagname" SET DATA TYPE VARCHAR(20),
ADD CONSTRAINT "post_reference_pkey" PRIMARY KEY ("discussionid", "hashtagname");

-- AlterTable
ALTER TABLE "reaction" DROP COLUMN "vote",
ADD COLUMN     "vote" BOOLEAN;

-- AlterTable
ALTER TABLE "song" ADD COLUMN     "bandname" VARCHAR(10),
ADD COLUMN     "nickname" VARCHAR(16),
ADD COLUMN     "releasedate" DATE NOT NULL,
ALTER COLUMN "albumid" DROP NOT NULL;

-- DropTable
DROP TABLE "musician";

-- DropTable
DROP TABLE "post";

-- DropTable
DROP TABLE "release";

-- DropTable
DROP TABLE "writing";

-- CreateTable
CREATE TABLE "observation" (
    "hashtagname" VARCHAR(20) NOT NULL,
    "nickname" VARCHAR(16) NOT NULL,

    CONSTRAINT "observation_pkey" PRIMARY KEY ("hashtagname","nickname")
);

-- CreateTable
CREATE TABLE "band_member" (
    "nickname" VARCHAR(16) NOT NULL,
    "bandname" VARCHAR(10) NOT NULL,
    "entrytimestamp" TIMESTAMP(6) NOT NULL,
    "exittimestamp" TIMESTAMP(6),

    CONSTRAINT "band_member_pkey" PRIMARY KEY ("nickname","bandname")
);

-- CreateTable
CREATE TABLE "artist" (
    "nickname" VARCHAR(16) NOT NULL,
    "firstname" VARCHAR(20) NOT NULL,
    "lastname" VARCHAR(20) NOT NULL,
    "e_mail" VARCHAR(100),
    "locality" VARCHAR(16) NOT NULL,
    "bestinstrument" VARCHAR(16) NOT NULL,
    "telephonenumber" VARCHAR(16) NOT NULL,
    "iscertified" BOOLEAN NOT NULL,
    "ismaster" BOOLEAN NOT NULL,
    "pass" VARCHAR(128) NOT NULL,

    CONSTRAINT "artist_pkey" PRIMARY KEY ("nickname")
);

-- CreateIndex
CREATE UNIQUE INDEX "artist_e_mail_key" ON "artist"("e_mail");

-- CreateIndex
CREATE UNIQUE INDEX "artist_telephonenumber_key" ON "artist"("telephonenumber");

-- AddForeignKey
ALTER TABLE "album" ADD CONSTRAINT "album_bandname_fkey" FOREIGN KEY ("bandname") REFERENCES "band"("bandname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "album" ADD CONSTRAINT "album_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chat_participant" ADD CONSTRAINT "chat_participant_chatid_fkey" FOREIGN KEY ("chatid") REFERENCES "chat"("chatid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chat_participant" ADD CONSTRAINT "chat_participant_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "discussion" ADD CONSTRAINT "discussion_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "influence" ADD CONSTRAINT "influence_genrename_fkey" FOREIGN KEY ("genrename") REFERENCES "genre"("genrename") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "influence" ADD CONSTRAINT "influence_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_chatid_nickname_fkey" FOREIGN KEY ("chatid", "nickname") REFERENCES "chat_participant"("chatid", "nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post_reference" ADD CONSTRAINT "post_reference_hashtagname_fkey" FOREIGN KEY ("hashtagname") REFERENCES "hashtag"("hashtagname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reaction" ADD CONSTRAINT "reaction_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "song" ADD CONSTRAINT "song_bandname_fkey" FOREIGN KEY ("bandname") REFERENCES "band"("bandname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "song" ADD CONSTRAINT "song_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "observation" ADD CONSTRAINT "observation_hashtagname_fkey" FOREIGN KEY ("hashtagname") REFERENCES "hashtag"("hashtagname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "observation" ADD CONSTRAINT "observation_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "band_member" ADD CONSTRAINT "band_member_bandname_fkey" FOREIGN KEY ("bandname") REFERENCES "band"("bandname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "band_member" ADD CONSTRAINT "band_member_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "artist"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;
