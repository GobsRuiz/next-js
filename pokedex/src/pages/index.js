// CSS
import styles from "../styles/pages/index/pokedex.module.scss"

// Components
import { useState } from "react"
import Card from "../components/card"



export default function Home({result}) {
  const [pokemons, setPokemons] = useState(result)
  const [offset, setOffset] = useState(0)

  const pagination = async (url, next) => {
    const response = await fetch(url)
    const result = await response.json()

    setOffset(next ? offset + 20 : offset - 20)
    setPokemons(result)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.pokedex}>
        <div className={styles.pokedex_left}>
          <div className={styles.pokedex_left_top}>
            <div className={styles.pokedex_left_top_container}>
              <div className={styles.pokedex_left_top_scan}>
              </div>

              <div className={styles.pokedex_left_top_smallScans}></div>
              <div className={styles.pokedex_left_top_smallScans}></div>
              <div className={styles.pokedex_left_top_smallScans}></div>
            </div>
          </div>

          <div className={styles.pokedex_left_bottom}>
            <div className={styles.pokedex_left_bottom_viewfinder}>
              <div className={styles.pokedex_left_bottom_viewfinder_television}>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />
              </div>

              <div className={styles.pokedex_left_bottom_controls}>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export async function getStaticProps(){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const result = await response.json()

  return{
    props:{
      result
    }
  }
}
