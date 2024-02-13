-- Create new musician
INSERT INTO ARTIST (nickname, firstName, lastName, 
e_mail, pass, locality, bestInstrument, telephoneNumber, isCertified, isMaster)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)

-- WATCH musician profile
SELECT * FROM ARTIST
WHERE ARTIST.nickname = ($1)

-- CHANGE email
UPDATE ARTIST
SET e_mail=($2)
WHERE nickname=($1)

-- add INFLUENCING GENRE
INSERT INTO INFLUENCE(genreName, nickname)
    VALUES($1, $2)
