import express, { Express, Request, Response } from "express";
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello from express server");
});

app.post("/run", (req: Request, res: Response) => {
    const { language, code } = req.body;
    if (code === undefined) {
        return res.status(400).json({ success: false, error: "empty code body" })
    }

    return res.json({language, code});
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
