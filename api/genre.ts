import express, {Express, Router, Response, Request} from 'express';
import { PrismaClient } from '@prisma/client';

const router:Router = express.Router();
const prisma:PrismaClient = new PrismaClient();

//fetch all musicians
router.get('/', async (req: Request, res: Response) => {
    const genres = await prisma.musician.findMany();
    res.json(genres);
});

router.post('/', async (req: Request, res: Response) => {
    const genre = await prisma.genre.create({
        data: {
            genrename: "Hip-hop",
            genredescription: "è bello",
            origin: "america"
        }
    })
    res.json(genre);
})

module.exports = router;