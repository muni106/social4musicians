-- Populate the MUSICIAN table with more data
INSERT INTO MUSICIAN (nickname, firstName, lastName, e_mail, locality, bestInstrument, telephoneNumber, isCertified, isMaster)
VALUES
    ('guitarhero42', 'Sam', 'Rock', 'sam.rock@example.com', 'Nashville', 'Guitar', '555-1111', 1, 1),
    ('pianomagician', 'Lily', 'Keys', 'lily.keys@example.com', 'New Orleans', 'Piano', '555-2222', 1, 0),
    ('fiddlingwizard', 'Tom', 'Fiddle', 'tom.fiddle@example.com', 'Austin', 'Violin', '555-3333', 0, 1),
    ('drummerboy', 'Max', 'Beats', 'max.beats@example.com', 'Los Angeles', 'Drums', '555-4444', 1, 0),
    ('bassmaster', 'Ella', 'Bass', 'ella.bass@example.com', 'Chicago', 'Bass', '555-5555', 0, 1),
    ('trumpetstar', 'Charlie', 'Brass', 'charlie.brass@example.com', 'New York', 'Trumpet', '555-6666', 1, 1),
    ('xylophonist', 'Olivia', 'Wood', 'olivia.wood@example.com', 'San Francisco', 'Xylophone', '555-7777', 1, 0),
    ('accordionking', 'Victor', 'Squeeze', 'victor.squeeze@example.com', 'New York', 'Accordion', '555-8888', 0, 1),
    ('banjoking', 'Alex', 'Strings', 'alex.strings@example.com', 'Nashville', 'Banjo', '555-9999', 0, 1),
    ('keytarwizard', 'Lisa', 'Synth', 'lisa.synth@example.com', 'Los Angeles', 'Keytar', '555-1010', 1, 0),
    ('saxophonic', 'Michael', 'Reed', 'michael.reed@example.com', 'New Orleans', 'Saxophone', '555-2020', 1, 1),
    ('maracaman', 'Maria', 'Rhythm', 'maria.rhythm@example.com', 'Miami', 'Maracas', '555-3030', 0, 1),
    ('trianglefanatic', 'Tim', 'Chime', 'tim.chime@example.com', 'Austin', 'Triangle', '555-4040', 0, 0),
    ('flutemaster', 'Sophia', 'Wind', 'sophia.wind@example.com', 'Chicago', 'Flute', '555-5050', 1, 1),
    ('didgeridoodler', 'Daniel', 'Didgeridoo', 'daniel.didgeridoo@example.com', 'Sydney', 'Didgeridoo', '555-6060', 0, 1),
    ('thereminwhiz', 'Grace', 'Ether', 'grace.ether@example.com', 'Moscow', 'Theremin', '555-7070', 1, 0),
    ('accordionista', 'Giuseppe', 'Bellini', 'giuseppe.bellini@example.com', 'Milan', 'Accordion', '555-1111', 1, 1),
    ('violinistavirtuoso', 'Elena', 'Russo', 'elena.russo@example.com', 'Rome', 'Violin', '555-2222', 1, 0),
    ('pianomaestro', 'Franco', 'Rossi', 'franco.rossi@example.com', 'Naples', 'Piano', '555-3333', 0, 1),
    ('bagpiper', 'Alistair', 'McGregor', 'alistair.mcgregor@example.com', 'Edinburgh', 'Bagpipes', '555-4444', 1, 0),
    ('flamencoguitar', 'Isabella', 'Lopez', 'isabella.lopez@example.com', 'Seville', 'Flamenco Guitar', '555-5555', 1, 1),
    ('irishwhistle', 'Declan', 'O connor', 'declan.oconnor@example.com', 'Dublin', 'Irish Whistle', '555-6666', 0, 1),
    ('polkaaccordion', 'Karolina', 'Kowalski', 'karolina.kowalski@example.com', 'Warsaw', 'Accordion', '555-7777', 1, 1),
    ('scottishfiddler', 'Fiona', 'MacLeod', 'fiona.macleod@example.com', 'Glasgow', 'Fiddle', '555-8888', 0, 0);

INSERT INTO GENRE (genreName, genreDescription, origin)
VALUES
    ('Pop', 'A genre of popular music characterized by catchy melodies and a wide appeal.', 'Worldwide'),
    ('R&B', 'Rhythm and Blues, a genre that combines elements of jazz, gospel, and blues.', 'United States'),
    ('Folk', 'A genre of music that reflects the cultural traditions of a particular region or community.', 'Various'),
    ('Metal', 'A genre of music known for its heavy and aggressive sound, often characterized by distorted guitars.', 'Worldwide'),
    ('Punk', 'A genre of music characterized by its raw and rebellious attitude.', 'United States'),
    ('Soul', 'A genre of music that combines elements of gospel and rhythm and blues.', 'United States'),
    ('Reggaeton', 'A genre of music that originated in Puerto Rico, combining Latin rhythms with hip-hop and dancehall influences.', 'Puerto Rico'),
    ('K-Pop', 'Korean Pop music, known for its catchy tunes and visually stunning music videos.', 'South Korea');
    ('Alternative', 'A genre of music that encompasses a diverse range of styles and sounds.', 'Worldwide'),
    ('Country', 'A genre of music that celebrates rural life and storytelling.', 'United States'),
    ('J-Pop', 'Japanese Pop music, known for its catchy melodies and anime tie-ins.', 'Japan'),
    ('Ska', 'A genre of music characterized by its offbeat rhythms and horn sections.', 'Jamaica'),
    ('Disco', 'A genre of music that emerged in the 1970s, known for its danceable beats and vibrant nightlife.', 'United States'),
    ('Gospel', 'A genre of music that features Christian themes and powerful vocal performances.', 'United States'),
    ('Indie', 'A genre of music associated with independent and non-mainstream artists.', 'Worldwide'),
    ('Rap', 'A genre of music that emphasizes rhythm and wordplay, often delivered in spoken or rhymed form.', 'United States');
    ('Rockabilly', 'A genre that combines elements of rock and country music, popular in the 1950s.', 'United States'),
    ('Classical', 'A genre known for its orchestral and instrumental compositions.', 'Europe'),
    ('Techno', 'A genre of electronic dance music characterized by repetitive beats and synthesized sounds.', 'Germany'),
    ('Salsa', 'A genre of Latin music and dance that originated in Cuba.', 'Cuba'),
    ('Blues', 'A genre rooted in African American history, known for its emotional expression.', 'United States'),
    ('Opera', 'A genre of music that combines singing, acting, and orchestral accompaniment.', 'Italy'),
    ('Funk', 'A genre of music that blends soul, R&B, and jazz, known for its groovy basslines.', 'United States'),
    ('Punk Rock', 'A subgenre of punk characterized by loud, fast, and DIY (do-it-yourself) ethos.', 'United States');

INSERT INTO CHAT_PARTICIPANT (entryDate, exitDate, nickname)
VALUES
    ('2023-01-15', NULL, 'guitarhero42'),
    ('2023-02-20', NULL, 'pianomagician'),
    ('2023-03-25', NULL, 'fiddlingwizard'),
    ('2023-04-05', NULL, 'drummerboy'),
    ('2023-05-12', NULL, 'bassmaster'),
    ('2023-06-18', NULL, 'trumpetstar'),
    ('2023-07-22', NULL, 'xylophonist'),
    ('2023-08-30', NULL, 'accordionking'),
    ('2023-09-10', NULL, 'banjoking'),
    ('2023-10-15', NULL, 'keytarwizard');