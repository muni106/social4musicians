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
  await prisma.reaction.deleteMany({
    where: {
      nickname: nickName,
      discussionid: discussionID
    }
  })
}

export async function deletePostReference(
  prisma: PrismaClient,
  discussionID: number,
  hashtag: string
) {
  const deletedReference = await prisma.post_reference.deleteMany({
    where: {
      hashtagname: hashtag,
      discussionid: discussionID
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
  return deleteChat;
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