import { Response } from 'express'
import RecipeBusiness from '../../Businesses/RecipeBusiness'
import { uploadToBucket } from '../../Businesses/UploadToBucketBusiness'

async function getRecipe(req: any, res: Response) {
  try {
    const filter = req.query

    const recipes = await RecipeBusiness.fetchRecipes(filter)
    return res.status(200).send({ recipes })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function createRecipe(req: any, res: Response) {
  // await RecipeBusiness.wipeDatabase()  
  // return res.status(201).send('Database wiped')
  const { file } = req
  const { nome, descricao, tempoPreparo, qtdeFavoritos, ingredientes, instrucoes } = req.body
  
  try {
    if (!file) throw new Error('Não foi possível obter a imagem da receita')

    const imgName = file.originalname
    const blob = file.buffer

    await uploadToBucket(imgName, blob)
  
    const recipe = await RecipeBusiness.createRecipe({
      nome,
      descricao,
      tempoPreparo,
      qtdeFavoritos,
      ingredientes,
      instrucoes,
      urlImagem: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${imgName}`
    })

    return res.status(201).send({ recipe })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { getRecipe, createRecipe }

