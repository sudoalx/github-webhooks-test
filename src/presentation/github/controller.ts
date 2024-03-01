import { Request, Response } from "express";

export class GithubController {
  constructor() {}

  webhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.headers["x-github-event"] ?? "unknown";
    const signature = req.headers["x-hub-signature-256"] ?? "unknown";
    const { body: payload } = req;

    console.log(JSON.stringify(payload));

    res.status(202).send("Accepted!");
  };
}
