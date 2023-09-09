import { PrismaClient } from "@prisma/client";
import {
  addChatParticipant,
  createChat,
  createMessage,
} from "../queries/dbCreate";
import {
  getAllArtists,
  getAllChats,
  getChatParticipants,
} from "../queries/dbRead";

export async function seedChats(prisma: PrismaClient) {
  try {
    await createChat(prisma, "MelodyMakers");
    await createChat(prisma, "RockRevolution");
    await createChat(prisma, "JazzJunkies");
    await createChat(prisma, "ClassicalChords");
    await createChat(prisma, "HipHopHarmony");
    await createChat(prisma, "PopPioneers");
    await createChat(prisma, "CountryCraze");
    await createChat(prisma, "BluesBeat");
    await createChat(prisma, "ElectronicEchoes");
    await createChat(prisma, "IndieInstruments");
    await createChat(prisma, "ReggaeRhythms");
    await createChat(prisma, "FolkFusion");
    await createChat(prisma, "MelodyMakers");
  } catch (error) {
    console.log("error on seedChats: ", error);
  }
}

export async function seedChatParticipant(prisma: PrismaClient) {
  try {
    const artists = await getAllArtists(prisma);
    const chats = await getAllChats(prisma);
    artists.forEach((x) => {
      let current = [...chats].sort(() => 0.5 - Math.random());
      for (let index = 0; index < 3; index++) {
        addChatParticipant(
          prisma,
          x.nickname,
          new Date(),
          current[index].chatid
        );
      }
    });
  } catch (error) {
    console.log("error on seedChatParticipant: ", error);
  }
}

export async function seedMessages(prisma: PrismaClient) {
  try {
    const artist = await getChatParticipants(prisma);
    if (artist == undefined) {
      console.log("no artist found");
      return;
    }
    artist.forEach((x) => {
      createMessage(prisma, x!.chatid, x!.nickname, "ciao", new Date());
    });
  } catch (error) {
    console.log("error on seedMessages: ", error);
  }
}
