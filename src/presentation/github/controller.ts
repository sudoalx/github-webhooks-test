import { Request, Response } from "express";

export class GithubController {
  constructor() {}

  webhookHandler = (req: Request, res: Response) => {
    console.log(`Endpoint called!`);
    res.json({ message: "Hello, GitHub!" });
  };
}
