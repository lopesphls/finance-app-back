import express, { type Request, type Response } from 'express';
import 'reflect-metadata';

export default function Server(): void {
	const app = express();
	const port = process.env.PORT || 3000;

	app.get('/', (req: Request, res: Response) => {
		res.send('ok');
	});

	app.listen(3000, () => {
		console.log(`server rodando no http://localhost:${port}`);
	});
}

Server();
