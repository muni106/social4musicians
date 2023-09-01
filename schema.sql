CREATE TABLE MUSICIAN (
    nickname VARCHAR(16) NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL, 
    e_mail VARCHAR(100) UNIQUE,
    locality VARCHAR(16) NOT NULL, 
    bestInstrument VARCHAR(16) NOT NULL,
    telephoneNumber VARCHAR(16) NOT NULL,
    isCertified BIT NOT NULL,
    isMaster BIT NOT NULL,
    constraint MUSICIAN_ID PRIMARY KEY (nickname));
