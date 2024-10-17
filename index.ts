import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = 4000;

app.use(express.json());

app.use('/block', (request: Request, response: Response) => {
    const timer = 10000;
    console.log("blocking", { timer });
    const start = Date.now();

    // 10 seconds
    while ((Date.now() - start) < timer) {
    
    }
    
    console.log("blocking this");
    response.send("block api response");
});

app.use('/non-block', (request: Request, response: Response) => {
    const timer = 2000;
    console.log("non blocking", { timer });

    response.send("Hello, I am non block api response");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
