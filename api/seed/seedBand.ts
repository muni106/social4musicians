import { PrismaClient } from "@prisma/client";
import {
  createAlbumByArtist,
  createAlbumByBand,
  createBand,
  createBandMember,
  createSongByArtist,
  createSongByBand,
} from "../queries/dbCreate";
import {
  getAllArtists,
  getAllBands,
  getAllGenres,
  getAllSongs,
  getArtistSongs,
  getBandSongs,
} from "../queries/dbRead";
import { addSongGenre, addSongToAlbum } from "../queries/dbUpdates";

export async function seedBands(prisma: PrismaClient) {
  try {
    await createBand(prisma, "ok", new Date());
    await createBand(prisma, "Eternal Echoes", new Date());
    await createBand(prisma, "Lunar Lullabies", new Date());
    await createBand(prisma, "Neon Serenades", new Date());
    await createBand(prisma, "Crimson Velvet", new Date());
    await createBand(prisma, "Midnight Mirage", new Date());
    await createBand(prisma, "Solar Symphony", new Date());
    await createBand(prisma, "Quantum Harmonics", new Date());
    await createBand(prisma, "Infinite Incantations", new Date());
    await createBand(prisma, "Celestial Sirens", new Date());
  } catch (error) {
    console.log("error on seedBands: ", error);
  }
}

export async function seedBandMembers(prisma: PrismaClient) {
  try {
    const artists = await getAllArtists(prisma);
    const bands = await getAllBands(prisma);
    let i = 0;
    bands.forEach((band) => {
      createBandMember(prisma, artists[i].nickname, band.bandname, new Date());
      i++;
      createBandMember(prisma, artists[i].nickname, band.bandname, new Date());
      i++;
    });
  } catch (error) {
    console.log("error on seedBandMenbers: ", error);
  }
}

export async function seedSongs(prisma: PrismaClient) {
  try {
    const bands = await getAllBands(prisma);
    const users = await getAllArtists(prisma);
    for (let i = 0; i < bands.length; i++) {
      await createSongByBand(
        prisma,
        3,
        "default song",
        130,
        bands[i].bandname,
        new Date()
      );
    }
    for (let i = 0; i < bands.length; i++) {
      await createSongByBand(
        prisma,
        3,
        "default song 2",
        130,
        bands[i].bandname,
        new Date()
      );
    }

    for (let i = 0; i < users.length; i++) {
      await createSongByArtist(
        prisma,
        2,
        "default solo song",
        60,
        users[i].nickname,
        new Date()
      );
    }
    for (let i = 0; i < users.length; i++) {
      await createSongByArtist(
        prisma,
        2,
        "default solo song 2",
        60,
        users[i].nickname,
        new Date()
      );
    }
  } catch (error) {
    console.log("error on seedSongs: ", error);
  }
}

export async function seedAlbums(prisma: PrismaClient) {
  try {
    const allSongs = await getAllSongs(prisma);
    const allArtists = await getAllArtists(prisma);
    const allBands = await getAllBands(prisma);
    for (let i = 0; i < allArtists.length; i++) {
      let currAlbum = await createAlbumByArtist(
        prisma,
        "default album",
        new Date(),
        allArtists[i].nickname
      );
      let songs = await getArtistSongs(prisma, allArtists[i].nickname);
      await addSongToAlbum(prisma, songs![0].songid, currAlbum.albumid);
    }

    for (let i = 0; i < allBands.length; i++) {
      let currAlbum = await createAlbumByBand(
        prisma,
        "default solo album",
        new Date(),
        allBands[i].bandname
      );
      let songs = await getBandSongs(prisma, allBands[i].bandname);
      await addSongToAlbum(prisma, songs![0].songid, currAlbum.albumid);
    }
  } catch (error) {
    console.log("error on seedAlbums: ", error);
  }
}

export async function seedSongGenres(prisma: PrismaClient) {
  try {
    const genres = await getAllGenres(prisma);
    const songs = await getAllSongs(prisma);
    songs.forEach((song) => {
      let currentGenres = [...genres].sort(() => 0.5 - Math.random());
      for (let i = 0; i < 3; i++) {
        addSongGenre(prisma, song.songid, currentGenres[i].genrename);
      }
    });
  } catch (error) {
    console.log("error on seedSongGenres: ", error);
  }
}
