import { Request, Response } from "express";
import { Example, IExample } from "../../models/example";

export const sampleGetController = async (req: Request, res: Response) => {
  try {
    const { argument1 } = req.query;
    if (typeof argument1 === "string") {
      const data: Array<IExample> = await Example.find({
        argument1: argument1,
      });
      res.send(data);
    } else {
      res.status(400).send({
        msg: "Argument has an unexpected type.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send([
      {
        msg: "Internal server error.",
        err: error,
      },
    ]);
  }
};

export const sampleDeleteController = async (req: Request, res: Response) => {
  try {
    const { argumentId } = req.body;
    if (argumentId) {
      const data: IExample | null = await Example.findOneAndDelete({
        _id: argumentId,
      });
      res.send(data);
    } else {
      res.status(400).send({
        msg: "Argument has an unexpected type.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send([
      {
        msg: "Internal server error.",
        err: error,
      },
    ]);
  }
};

export const samplePostController = async (req: Request, res: Response) => {
  try {
    const { argument1 } = req.body;
    if (typeof argument1 === "string") {
      const data: IExample = await Example.create({
        argument1: argument1,
      });
      res.send(data);
    } else {
      res.status(400).send({
        msg: "Argument has an unexpected type.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send([
      {
        msg: "Internal server error.",
        err: error,
      },
    ]);
  }
};

export const samplePutController = async (req: Request, res: Response) => {
  try {
    const { argumentId, argument1 } = req.body;
    if (typeof argument1 === "string" && argumentId) {
      const data: IExample | null = await Example.findOneAndUpdate(
        {
          _id: argumentId,
        },
        {
          argument1: argument1,
        },
        { new: true, upsert: true }
      );
      res.send(data);
    } else {
      res.status(400).send({
        msg: "Argument has an unexpected type.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send([
      {
        msg: "Internal server error.",
        err: error,
      },
    ]);
  }
};
