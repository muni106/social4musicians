-- CreateTable
CREATE TABLE "album" (
    "albumid" SERIAL NOT NULL,
    "albumname" VARCHAR(10) NOT NULL,
    "realesedate" DATE NOT NULL
);

-- CreateTable
CREATE TABLE "appartainance" (
    "genrename" VARCHAR(16) NOT NULL,
    "songid" INTEGER NOT NULL,

    CONSTRAINT "appartainance_pkey" PRIMARY KEY ("genrename")
);

-- CreateTable
CREATE TABLE "band" (
    "bandname" VARCHAR(10) NOT NULL,
    "foundationdate" DATE NOT NULL,

    CONSTRAINT "band_pkey" PRIMARY KEY ("bandname")
);

-- CreateTable
CREATE TABLE "chat" (
    "chatid" SERIAL NOT NULL,
    "participantid" INTEGER NOT NULL,
    "chatname" VARCHAR(10) NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("chatid")
);

-- CreateTable
CREATE TABLE "chat_participant" (
    "participantid" SERIAL NOT NULL,
    "entrydate" DATE NOT NULL,
    "exitdate" DATE,
    "nickname" VARCHAR(16) NOT NULL,

    CONSTRAINT "chat_participant_pkey" PRIMARY KEY ("participantid")
);

-- CreateTable
CREATE TABLE "comment" (
    "commentid" SERIAL NOT NULL,
    "commenttext" VARCHAR(32) NOT NULL,
    "timestampcomment" TIMESTAMP(6) NOT NULL,
    "discussionid" INTEGER NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("commentid")
);

-- CreateTable
CREATE TABLE "discussion" (
    "discussionid" SERIAL NOT NULL,
    "timestampdiscussion" TIMESTAMP(6) NOT NULL,
    "title" VARCHAR(16) NOT NULL,
    "average" INTEGER NOT NULL,

    CONSTRAINT "discussion_pkey" PRIMARY KEY ("discussionid")
);

-- CreateTable
CREATE TABLE "follow" (
    "genrename" VARCHAR(16) NOT NULL,
    "nickname" VARCHAR(16) NOT NULL,

    CONSTRAINT "follow_pkey" PRIMARY KEY ("genrename","nickname")
);

-- CreateTable
CREATE TABLE "genre" (
    "genrename" VARCHAR(16) NOT NULL,
    "genredescription" VARCHAR(128) NOT NULL,
    "origin" VARCHAR(256) NOT NULL,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("genrename")
);

-- CreateTable
CREATE TABLE "hashtag" (
    "hashtagname" VARCHAR(10) NOT NULL,
    "nickname" VARCHAR(16) NOT NULL,

    CONSTRAINT "hashtag_pkey" PRIMARY KEY ("hashtagname")
);

-- CreateTable
CREATE TABLE "influence" (
    "genrename" VARCHAR(16) NOT NULL,
    "nickname" VARCHAR(16) NOT NULL,

    CONSTRAINT "influence_pkey" PRIMARY KEY ("genrename","nickname")
);

-- CreateTable
CREATE TABLE "message" (
    "messageid" SERIAL NOT NULL,
    "chatid" INTEGER NOT NULL,
    "participantid" INTEGER NOT NULL,
    "messagetext" VARCHAR(255) NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("messageid")
);

-- CreateTable
CREATE TABLE "musician" (
    "nickname" VARCHAR(16) NOT NULL,
    "firstname" VARCHAR(20) NOT NULL,
    "lastname" VARCHAR(20) NOT NULL,
    "e_mail" VARCHAR(100),
    "locality" VARCHAR(16) NOT NULL,
    "bestinstrument" VARCHAR(16) NOT NULL,
    "telephonenumber" VARCHAR(16) NOT NULL,
    "iscertified" BIT(1) NOT NULL,
    "ismaster" BIT(1) NOT NULL,

    CONSTRAINT "musician_pkey" PRIMARY KEY ("nickname")
);

-- CreateTable
CREATE TABLE "post" (
    "discussionid" INTEGER NOT NULL,
    "commentid" INTEGER NOT NULL,
    "nickname" VARCHAR(16) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("discussionid","commentid","nickname")
);

-- CreateTable
CREATE TABLE "post_reference" (
    "discussionid" INTEGER NOT NULL,
    "hashtagname" VARCHAR(10) NOT NULL,

    CONSTRAINT "post_reference_pkey" PRIMARY KEY ("discussionid","hashtagname")
);

-- CreateTable
CREATE TABLE "reaction" (
    "nickname" VARCHAR(16) NOT NULL,
    "discussionid" INTEGER NOT NULL,
    "vote" BIT(1),
    "dateandtime" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "reaction_pkey" PRIMARY KEY ("nickname","discussionid")
);

-- CreateTable
CREATE TABLE "release" (
    "albumid" INTEGER NOT NULL,
    "nickname" VARCHAR(16),
    "bandname" VARCHAR(10),

    CONSTRAINT "release_pkey" PRIMARY KEY ("albumid")
);

-- CreateTable
CREATE TABLE "song" (
    "songid" SERIAL NOT NULL,
    "musictrack" INTEGER NOT NULL,
    "songname" VARCHAR(10) NOT NULL,
    "duration" INTEGER NOT NULL,
    "albumid" INTEGER NOT NULL,

    CONSTRAINT "song_pkey" PRIMARY KEY ("songid")
);

-- CreateTable
CREATE TABLE "writing" (
    "songid" INTEGER NOT NULL,
    "nickname" VARCHAR(16),
    "bandname" VARCHAR(10),

    CONSTRAINT "writing_pkey" PRIMARY KEY ("songid")
);

-- CreateIndex
CREATE UNIQUE INDEX "album_albumid_key" ON "album"("albumid");

-- CreateIndex
CREATE UNIQUE INDEX "chat_participant_entrydate_key" ON "chat_participant"("entrydate");

-- CreateIndex
CREATE UNIQUE INDEX "chat_participant_exitdate_key" ON "chat_participant"("exitdate");

-- CreateIndex
CREATE UNIQUE INDEX "musician_e_mail_key" ON "musician"("e_mail");

-- CreateIndex
CREATE UNIQUE INDEX "musician_telephonenumber_key" ON "musician"("telephonenumber");

-- AddForeignKey
ALTER TABLE "appartainance" ADD CONSTRAINT "appartainance_genrename_fkey" FOREIGN KEY ("genrename") REFERENCES "genre"("genrename") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "appartainance" ADD CONSTRAINT "appartainance_songid_fkey" FOREIGN KEY ("songid") REFERENCES "song"("songid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chat_participant" ADD CONSTRAINT "chat_participant_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "musician"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_discussionid_fkey" FOREIGN KEY ("discussionid") REFERENCES "discussion"("discussionid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_genrename_fkey" FOREIGN KEY ("genrename") REFERENCES "genre"("genrename") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "musician"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hashtag" ADD CONSTRAINT "hashtag_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "musician"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_chatid_fkey" FOREIGN KEY ("chatid") REFERENCES "chat"("chatid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_participantid_fkey" FOREIGN KEY ("participantid") REFERENCES "chat_participant"("participantid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_commentid_fkey" FOREIGN KEY ("commentid") REFERENCES "comment"("commentid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_discussionid_fkey" FOREIGN KEY ("discussionid") REFERENCES "discussion"("discussionid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "musician"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post_reference" ADD CONSTRAINT "post_reference_discussionid_fkey" FOREIGN KEY ("discussionid") REFERENCES "discussion"("discussionid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post_reference" ADD CONSTRAINT "post_reference_hashtagname_fkey" FOREIGN KEY ("hashtagname") REFERENCES "hashtag"("hashtagname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reaction" ADD CONSTRAINT "reaction_discussionid_fkey" FOREIGN KEY ("discussionid") REFERENCES "discussion"("discussionid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reaction" ADD CONSTRAINT "reaction_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "musician"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "release" ADD CONSTRAINT "release_albumid_fkey" FOREIGN KEY ("albumid") REFERENCES "album"("albumid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "release" ADD CONSTRAINT "release_bandname_fkey" FOREIGN KEY ("bandname") REFERENCES "band"("bandname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "release" ADD CONSTRAINT "release_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "musician"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "song" ADD CONSTRAINT "song_albumid_fkey" FOREIGN KEY ("albumid") REFERENCES "album"("albumid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "writing" ADD CONSTRAINT "writing_bandname_fkey" FOREIGN KEY ("bandname") REFERENCES "band"("bandname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "writing" ADD CONSTRAINT "writing_nickname_fkey" FOREIGN KEY ("nickname") REFERENCES "musician"("nickname") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "writing" ADD CONSTRAINT "writing_songid_fkey" FOREIGN KEY ("songid") REFERENCES "song"("songid") ON DELETE CASCADE ON UPDATE NO ACTION;

