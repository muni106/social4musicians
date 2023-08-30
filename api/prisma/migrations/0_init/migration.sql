-- CreateTable
CREATE TABLE "_post" (
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,

    CONSTRAINT "_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_user" (
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "pass" VARCHAR(20) NOT NULL,

    CONSTRAINT "_user_pkey" PRIMARY KEY ("id")
);

