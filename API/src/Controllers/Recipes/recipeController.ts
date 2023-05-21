import { Request, Response } from 'express'
import RecipeBusiness from '../../Businesses/RecipeBusiness'

async function getRecipe(req: any, res: Response) {
  try {
    const filter = req.query

    const recipes = await RecipeBusiness.fetchRecipes(filter)
    return res.status(200).send({ recipes })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function createRecipe(req: Request, res: Response) {
  const { nome, descricao, tempoPreparo, qtdeFavoritos, ingredientes, instrucoes } = req.body
  try {
    const recipe = await RecipeBusiness.createRecipe({
      nome,
      descricao,
      tempoPreparo,
      qtdeFavoritos,
      ingredientes,
      instrucoes
    })

    return res.status(201).send({ recipe })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { getRecipe, createRecipe }

