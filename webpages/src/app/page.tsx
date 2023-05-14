import Image from 'next/image'
import styles from './page.module.css'
import homeImage from '../assets/home-image.png'
import searchArrow from '../assets/search-arrow.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Book of recipes</h1>
          <h2 className={styles.contentSubtitle}>
            Start by typing what<br/>
            you want to cook
          </h2>
          <div className={styles.inputContainer}>
            <input id='#searchInput' type='text' className={styles.input}/>
            <Image src={searchArrow} className={styles.inputIcon}/>
          </div>
        </div>
        <Image src={homeImage} className={styles.homeImage}/>
      </div>
    </main>
  )
}
