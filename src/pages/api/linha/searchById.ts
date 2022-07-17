import { NextApiRequest, NextApiResponse } from "next";

import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb'

type LinhaProps = {
  data: {
    ref: string;
    ts: number;
    data: {
      nome: string;
      empresa: string;
      cidade: string;
      horarios: string[];
      pontos: string[];
    }
  }[]

}
const data = async (req: NextApiRequest, res: NextApiResponse) => {

  console.log(req.body.data)

  const linhas: LinhaProps = await fauna.query(
    q.Map(
      req.body.data,
      q.Lambda(
        "linha",
        q.Get(
          q.Ref(
            q.Collection('linhas'),
            q.Var("linha")
          )
        )
      )
    )
  )

  console.log(linhas)
  return res.status(200).json(linhas);
}

export default data;