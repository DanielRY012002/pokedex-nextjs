import { Pokemon } from "@/interfaces/Pokemon";
import { PokemonList } from "@/interfaces/PokemonList";
import { Grid } from "@nextui-org/react";
import PokemonCard from "./PokemonCard";
interface Props {
  pokemonsList: Pokemon[];
}
function PokemonListC({ pokemonsList }: Props) {
  return (
    <Grid.Container gap={2} css={{ overflowX: "auto" }}>
      {pokemonsList.map((poke, index) => (
        <Grid xs={12} sm={6} md={4} key={index}>
          <PokemonCard pokemon={poke}></PokemonCard>
        </Grid>
      ))}
    </Grid.Container>
  );
}
export default PokemonListC;
