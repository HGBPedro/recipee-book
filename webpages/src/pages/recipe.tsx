import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import recipeApi from '@/consumer/consumer'
import MenuIcon from '@/assets/menu-icon.svg'
import ClockIcon from '@/assets/clock-icon.svg'
import Image from 'next/image'
import styles from './recipe.module.css'
import { IRecipe } from '@/interfaces/Interfaces'

function Recipe() {
  const router = useRouter()
  const { id } = router.query
  const [recipe, setRecipe] = useState<IRecipe>()

  useEffect(() => {
    const fetchSingleRecipe = async (recipeId: string) => {
      const controller = new AbortController()
    
    try {
      const { data } = await recipeApi.getRecipe({ params: { _id: recipeId }, signal: controller.signal })
      const recipe = data?.recipes[0]

      if (recipe) return setRecipe(recipe)
      throw new Error('Erro ao obter receitas')
    } catch (err) {
      console.log(err)
    }

    return controller.abort()
    }

    if (id) fetchSingleRecipe(id?.toString())
  }, [id])

  const calcRecipePrepTime = (prepTime: number) => {
    if (prepTime <= 60) return `${prepTime} MIN`
    const prepTimeInHours = prepTime / 60
    return `${prepTimeInHours.toFixed(1)} HR`
  }

  if (!recipe) return <></>
  return (
    <>
      <nav className='navbar'>
        <Image src={MenuIcon} alt='Clickable menu icon' />
      </nav>
      <main className={styles.main}>
        <img src={recipe.urlImagem} alt='Image representing selected recipe' className={styles.recipeImage}/>
        <h1 className={styles.recipeName}>{recipe.nome}</h1>
        <div className={styles.recipePrepTimeContainer}>
          <Image src={ClockIcon} alt='Icon of a clock representing the preparation time for the recipe'/>
          <p className={styles.recipePrepTimeText}>{calcRecipePrepTime(recipe.tempoPreparo)}</p>
        </div>
        {recipe.descricao && <p>{recipe.descricao}</p>}
        <div className={styles.recipeInfoContainer}>
          <section className={styles.recipeIngredients}>
            <h2 className={styles.sectionTitle}>Ingredients</h2>
            <ul>
              {recipe.ingredientes.map(item => <li>{item}</li>)}
            </ul>
          </section>
          <section className={styles.recipePreparation}>
            <h2 className={styles.sectionTitle}>Preparation</h2>
            {recipe.instrucoes.map(item => <p>{item}</p>)}
          </section>
        </div>
      </main>
    </>
  )
}

export default Recipe