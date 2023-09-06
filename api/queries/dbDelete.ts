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


// BAND DELETING 
// CHAT DELETING 