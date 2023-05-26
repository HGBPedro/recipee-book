"use client"
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import homeImage from '../assets/home-image.png'
import searchArrow from '../assets/search-arrow.svg'
import loadingOutlined from '../assets/LoadingOutlined.svg'
import recipeApi from '../consumer/consumer'
import { useDebounce } from './hooks'
import { IRecipe, IOptions } from '../interfaces/Interfaces'

export default function Home() {
  const debounce = useDebounce((text: string) => searchForRecipesByName(text), 3000)
  const [optionsList, setOptionsList] = useState<Array<IOptions>>([])
  const [isLoading, setIsLoading] = useState(false)

  const formatOptions = (recipes: Array<IRecipe>) => {
    return recipes.map(item => ({ value: item._id, label: item.nome }))
  }

  const searchForRecipesByName = async (name: string) => {
    const controller = new AbortController()
    
    try {
      const response = await recipeApi.getRecipe({ params: { nome: name, onlyName: true }, signal: controller.signal })

      if (response.data?.recipes) {
        const recipes = formatOptions(response.data?.recipes)
        setOptionsList(recipes)
        return setIsLoading(false)
      }
      throw new Error('Erro ao obter receitas')
    } catch (err) {
      console.log(err)
    }

    return controller.abort()
  }

  const handleRecipeSearch = (e: { preventDefault: () => void; target: { value: any } }) => {    
    e.preventDefault()

    setIsLoading(true)
    debounce(e.target.value)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Book of recipes</h1>
          <h2 className={styles.contentSubtitle}>
            Start by typing what<br/>
            you want to cook
          </h2>
          <div className={styles.searchContainer}>
            <div className={optionsList.length === 0 ? styles.inputContainer : styles.inputOpenOptions}>
              <input id='#searchInput' type='text' className={styles.input} onChange={handleRecipeSearch}/>
              {isLoading ? (
                <Image src={loadingOutlined} className={styles.loadingIcon} alt='An arrow icon used to go to the searched recipe'/>
              ) : (
                <Image src={searchArrow} className={styles.inputIcon} alt='An arrow icon used to go to the searched recipe'/>
              )}
            </div>
            {optionsList && optionsList.map(option => (
              <Link className={styles.recipeLink} href={`/recipe?id=${option.value}`}>{option.label}</Link>
            ))}
          </div>
        </div>
        <Image src={homeImage} className={styles.homeImage} alt='A image of a bread bowl with some mushrooms, a pan with some spices and vegetables and a bowl with chimichuri'/>
      </div>
    </main>
  )
}
