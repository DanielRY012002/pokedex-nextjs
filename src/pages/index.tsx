import Layout from "@/components/Layout";
import PokemonListC from "@/components/PokemonListC";
import { Pokemon } from "@/interfaces/Pokemon";
import { PokemonList } from "@/interfaces/PokemonList";
import { Grid } from "@nextui-org/react";
interface Props {
  pokemons: Pokemon[];
}
export default function IndexPage({pokemons}: Props) {
  return (
    <Grid.Container>
      <Layout>
        <PokemonListC pokemonsList={pokemons}></PokemonListC>
      </Layout>
    </Grid.Container>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const data = await res.json();
  let pokemons=[];
  for (let pokemon of data.results) {
    const response = await fetch(pokemon.url)
    const dataPokemon=await response.json();
    pokemons.push(dataPokemon)
  }
  return {
    props: {
      pokemons: pokemons,
    },
  };
};
