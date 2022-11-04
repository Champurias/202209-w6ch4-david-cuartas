import type { Request, Response } from "express";
import things from "../data/data.js";
import Thing from "../data/types.js";

const getId = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const thingLearned: Thing = things.find(
    (thingLearne) => thingLearne.id === +idThing
  );

  if (!thingLearned) {
    res.status(404).json({ message: "error" });
  }
  res.status(200).json(thingLearned);
};
export default getId;
