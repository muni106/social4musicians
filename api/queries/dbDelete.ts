import { PrismaClient } from "@prisma/client";

// USER DELETING 
export async function deleteUserByNickname(
  prisma: PrismaClient,
  nickName: string
) {
  const deleteMusician = prisma.musician.delete({
    where: {
      nickname: nickName,
    },
  });

  const deletePosts = prisma.discussion.deleteMany({
    where: {
        nickname: nickName, 
    },
  });

  const deleteComments = prisma.comment.deleteMany({
    where: {
      nickname: nickName
    },
  });
  const transaction = await prisma.$transaction([deletePosts, deleteComments, deleteMusician])
}

export async function removeFollowInstance(
  prisma: PrismaClient,
  genreName: string,
  nickName: string,
) {
  await prisma.follow.delete({
    where: {
      genrename_nickname: { genrename: genreName, nickname: nickName },
    }
  });
}

export async function removeInfluenceInstance(
  prisma: PrismaClient,
  genreName: string,
  nickName: string,
) {
  await prisma.influence.delete({
    where: {
      genrename_nickname: { genrename: genreName, nickname: nickName },
    }
  });
}


// POST DELETING 
export async function deleteComment(
  prisma: PrismaClient,
  commentID: number
) {
  const commentDeleted = prisma.comment.delete({
    where: {
        commentid: commentID,
    },
  });
}

export async function deleteReaction(
  prisma: PrismaClient,
  nickName: string,
  discussionID: number
) {
  await prisma.reaction.delete({
    where: {
      nickname_discussionid: {nickname: nickName, discussionid: discussionID},
    }
  })
}

export async function deletePostReference(
  prisma: PrismaClient,
  discussionID: number,
  hashtag: string
) {
  const deletedReference = await prisma.post_reference.delete({
    where: {
      discussionid_hashtagname: { hashtagname: hashtag, discussionid: discussionID }
    }
  });
}

// BAND DELETING

// CHAT DELETING 
export async function deleteChat(
  prisma: PrismaClient,
  chatID: number
) {
  const deletedChat = await prisma.chat.delete({
    where: {
      chatid: chatID
    }
  });
  return deletedChat;
}

export async function deleteMessage(
  prisma: PrismaClient,
  messageID: number
) {
  await prisma.message.delete({
    where: {
      messageid: messageID
    }
  });

}

export async function deleteChatParticipant(
  prisma: PrismaClient,
  nickName: string,
  chatID: number
) {
  await prisma.chat_participant.delete({
    where: {
      nickname: nickName,
      chatid: chatID
    }
  });
}

export async function deleteMusicAlbum(
  prisma: PrismaClient,
  albumID: number
) {
  await prisma.album.delete({
    where: {
      albumid: albumID
    }
  });
  await prisma.release.delete({
    where: {
      albumid: albumID
    }
  })
}

export async function deleteSong(
  prisma: PrismaClient,
  songID: number
) {
    await prisma.song.delete({
      where: {
        songid:songID
      }
    });

    await prisma.writing.delete({
      where: {
        songid: songID
      }
    });
    
}