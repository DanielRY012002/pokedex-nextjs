import { useEffect, useState } from "react";
import { Card, Text, Row, Badge, Grid } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Pokemon } from "@/interfaces/Pokemon";
interface Props {
  pokemon: Pokemon;
}
export default function PokemonCard({pokemon}:Props) {
  const router = useRouter();
  function formatId(id: number) {
    let code = "";
    code = String(id).padStart(3, "0");
    return code;
  }
  function prueb() {
    router.push(`/PokemonDetails/${pokemon.name}`);
  }
  return (
    <Card isPressable onClick={prueb}>
      {pokemon.name != undefined && (
        <div>
          <Card.Header>
            <Grid.Container>
              <Grid xs={12} justify="center">
                <Text className="pokemonTitle">{pokemon.name}</Text>
              </Grid>
              <Grid xs={12} justify="center">
                <Text className="pokemonId">{formatId(pokemon.id)}</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body>
            <Grid.Container justify="center">
              <Image
                src={pokemon.sprites.other["official-artwork"].front_default}
                className="pokemonImage"
                width={200}
                height={200}
                alt="Card image backgroundd"
                placeholder="blur"
                blurDataURL={`data:image/png;base64,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`}
              />
            </Grid.Container>
          </Card.Body>
          <Card.Footer>
            <Row justify="center">
              <Grid.Container gap={1} justify="center">
                {pokemon.types.map((type1: any, index: number) => {
                  return (
                    <Grid key={index}>
                      {type1.type.name == "grass" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#78C850" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "poison" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#A040A0" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "fire" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#F08030" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "water" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#6890F0" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "electric" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#F8D030" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "flying" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#A890F0" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "bug" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#A8B820" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "ground" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#E0C068" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "fighting" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#C03028" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "fairy" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#EE99AC" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "psychic" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#F85888" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "ice" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#98D8D8" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "ghost" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#705898" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "rock" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#B8A038" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "steel" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#705848" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "dragon" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#7038F8" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "dark" ? (
                        <Badge
                          enableShadow
                          disableOutline
                          css={{ background: "#705848" }}
                          className="typePill"
                        >
                          {type1.type.name}
                        </Badge>
                      ) : type1.type.name == "normal" ? (
                        <Badge enableShadow disableOutline className="typePill">
                          {type1.type.name}
                        </Badge>
                      ) : (
                        <Badge enableShadow disableOutline className="typePill">
                          {type1.type.name}
                        </Badge>
                      )}
                    </Grid>
                  );
                })}
              </Grid.Container>
            </Row>
          </Card.Footer>
        </div>
      )}
    </Card>
  );
}
