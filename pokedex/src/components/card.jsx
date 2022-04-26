export default function Card(props){
  const imageCode =  ('000' + (props.image + 1)).slice(-3);

  return(
    <div>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageCode}.png`} alt="" />
      <p>
        {props.name}
      </p>
    </div>
  )
}