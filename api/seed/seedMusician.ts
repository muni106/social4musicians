import { PrismaClient } from '@prisma/client';
import { userCreation } from '../queries/dbCreate';
import { getAllArtists } from '../queries/dbRead';

export async function seedMusicians(prisma: PrismaClient) {
    await userCreation(
    prisma,
    'guitarist1',
    'John',
    'Smith',
    'john.smith@email.com',
    'password1',
    'New York',
    'Guitar',
    '555-555-5551',
    true,
    false
  );
  await userCreation(
    prisma,
    'drummer1',
    'David',
    'Wilson',
    'david.wilson@email.com',
    'password3',
    'Chicago',
    'Drums',
    '555-555-5553',
    false,
    false
  );

  await userCreation(
    prisma,
    'saxophonist1',
    'Emily',
    'Davis',
    'emily.davis@email.com',
    'password4',
    'Miami',
    'Saxophone',
    '555-555-5554',
    true,
    true
  );

  await userCreation(
    prisma,
    'violinist1',
    'Michael',
    'Brown',
    'michael.brown@email.com',
    'password5',
    'San Francisco',
    'Violin',
    '555-555-5555',
    true,
    false
  );

  await userCreation(
   prisma,
  'singer1',
  'Sarah',
  'Johnson',
  'sarah.johnson@email.com',
  'password6',
  'Nashville',
  'Vocals',
  '555-555-5556',
  true,
  false
);

await userCreation(
   prisma,
  'bassist1',
  'Daniel',
  'Garcia',
  'daniel.garcia@email.com',
  'password7',
  'Austin',
  'Bass Guitar',
  '555-555-5557',
  false,
  false
);

await userCreation(
   prisma,
  'keyboardist1',
  'Olivia',
  'Lee',
  'olivia.lee@email.com',
  'password8',
  'Seattle',
  'Keyboard',
  '555-555-5558',
  true,
  true
);

await userCreation(
   prisma,
  'trumpetplayer1',
  'Ethan',
  'Martinez',
  'ethan.martinez@email.com',
  'password9',
  'New Orleans',
  'Trumpet',
  '555-555-5559',
  false,
  false
);

await userCreation(
   prisma,
  'flutist1',
  'Ava',
  'Brown',
  'ava.brown@email.com',
  'password10',
  'Boston',
  'Flute',
  '555-555-5560',
  true,
  false
);

await userCreation(
   prisma,
  'percussionist1',
  'Sophia',
  'Wang',
  'sophia.wang@email.com',
  'password11',
  'San Diego',
  'Percussion',
  '555-555-5561',
  true,
  false
);

await userCreation(
   prisma,
  'violist1',
  'James',
  'Miller',
  'james.miller@email.com',
  'password12',
  'Denver',
  'Viola',
  '555-555-5562',
  false,
  false
);

await userCreation(
   prisma,
  'cellist1',
  'Liam',
  'Chen',
  'liam.chen@email.com',
  'password13',
  'Philadelphia',
  'Cello',
  '555-555-5563',
  true,
  true
);

await userCreation(
   prisma,
  'clarinetist1',
  'Grace',
  'Johnson',
  'grace.johnson@email.com',
  'password14',
  'Portland',
  'Clarinet',
  '555-555-5564',
  false,
  false
);

await userCreation(
   prisma,
  'sitarplayer1',
  'Aarav',
  'Singh',
  'aarav.singh@email.com',
  'password15',
  'Mumbai',
  'Sitar',
  '555-555-5565',
  true,
  true
);
await userCreation(
   prisma,
  'drummer2',
  'Mia',
  'Anderson',
  'mia.anderson@email.com',
  'password16',
  'Austin',
  'Drums',
  '555-555-5566',
  true,
  true
);

await userCreation(
   prisma,
  'guitarist2',
  'Elijah',
  'Gonzalez',
  'elijah.gonzalez@email.com',
  'password17',
  'Los Angeles',
  'Guitar',
  '555-555-5567',
  true,
  false
);

await userCreation(
   prisma,
  'pianist2',
  'Sophie',
  'Moore',
  'sophie.moore@email.com',
  'password18',
  'Chicago',
  'Piano',
  '555-555-5568',
  false,
  false
);

await userCreation(
   prisma,
  'singer2',
  'Oliver',
  'Williams',
  'oliver.williams@email.com',
  'password19',
  'Nashville',
  'Vocals',
  '555-555-5569',
  true,
  true
);

await userCreation(
   prisma,
  'bassist2',
  'Zoe',
  'Turner',
  'zoe.turner@email.com',
  'password20',
  'San Francisco',
  'Bass Guitar',
  '555-555-5570',
  false,
  false
);

await userCreation(
   prisma,
  'keyboardist2',
  'Lucas',
  'Harris',
  'lucas.harris@email.com',
  'password21',
  'Seattle',
  'Keyboard',
  '555-555-5571',
  true,
  true
);

await userCreation(
   prisma,
  'trumpetplayer2',
  'Aria',
  'Scott',
  'aria.scott@email.com',
  'password22',
  'New Orleans',
  'Trumpet',
  '555-555-5572',
  false,
  false
);

await userCreation(
   prisma,
  'flutist2',
  'Henry',
  'Lewis',
  'henry.lewis@email.com',
  'password23',
  'Boston',
  'Flute',
  '555-555-5573',
  true,
  false
);
}

