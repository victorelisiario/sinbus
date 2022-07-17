import { NextApiRequest, NextApiResponse } from "next";

import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb'

interface linhaProps {
  ref: string
  ts: number,
  data: {
    nome: string,
    empresa: string,
    cidade: string,
    horarios: string[],
    pontos: string[]
  }
}

const data = async (req: NextApiRequest, res: NextApiResponse) => {

  const linha: linhaProps = await fauna.query(
    q.Create(
      q.Collection('linhas'),
      { data: req.body }
    )
  )

  const linhaID = await fauna.query(
    q.Let(
      { doc: q.Get(linha.ref) },
      q.Select(["ref", "id"], q.Var("doc")),
    ))

  const ponto_linha = linha.data.pontos.map(item => {
    return {
      linha: linhaID,
      ponto: item
    }
  })

  await fauna.query(
    q.Map(
      ponto_linha,
      q.Lambda(
        "linha",
        q.Create(
          q.Collection('pontos_linhas'),
          { data: q.Var("linha") }
        )
      )
    )
  )

  return res.status(200).json(linha);
}

export default data;