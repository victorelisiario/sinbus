import { NextApiRequest, NextApiResponse } from "next";

import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb'

type OnibusProps = {
  data: {
    ref: string;
    ts: number;
    data: {
      empresa: string;
      placa: string;
      linha: string;
    }
  }[]

}
const data = async (req: NextApiRequest, res: NextApiResponse) => {

  console.log(req.body.nome)

  const onibus: OnibusProps = await fauna.query(
    q.Map(
      q.Paginate(
        q.Match(
          q.Index("onibus_by_placa"),
          q.UpperCase(q.Trim(req.body.nome))
        )
      ),
      q.Lambda(
        "onibus",
        q.Get(q.Var("onibus")),
      )
    )
  )
  return res.status(200).json(onibus);
}

export default data;