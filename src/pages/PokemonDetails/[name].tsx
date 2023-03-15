import Layout from "@/components/Layout";
import { Badge, Card, Container, Grid, Text } from "@nextui-org/react";
export default function Detail({ data }: any) {
  return (
    <Grid.Container>
      <Layout>
        <Grid.Container
          css={{
            h: "100vh",
            overflowY:"auto",
          }}
        >
          <Grid.Container gap={2} justify="center" alignItems="center" css={{h:"1200px",w:"100%"}}>
            <Grid lg={3} md={3} sm={3} xs={12}>
              <Card css={{ maxHeight: "350px" }}>
                <Card.Body>
                  <Card.Image
                    src={data.sprites.other["official-artwork"].front_default}
                    className="pokemonImageDetail"
                  ></Card.Image>
                  <Grid.Container>
                    <Grid xs={6} justify="center">
                      <Card.Image src={data.sprites.front_default}></Card.Image>
                    </Grid>
                    <Grid xs={6} justify="center">
                      <Card.Image src={data.sprites.back_default}></Card.Image>
                    </Grid>
                  </Grid.Container>
                </Card.Body>
              </Card>
            </Grid>
            <Grid lg={6} sm={7} xs={12}>
              <Card css={{ maxHeight: "510px" }}>
                <Container>
                  <Card.Header>
                    <Grid.Container gap={1}>
                      <Grid xs={12}>
                        <Text className="pokemonTitle">{data.name}</Text>
                      </Grid>
                      {data.types.map((type1: any, index: number) => {
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
                              <Badge
                                enableShadow
                                disableOutline
                                className="typePill"
                              >
                                {type1.type.name}
                              </Badge>
                            ) : (
                              <Badge
                                enableShadow
                                disableOutline
                                className="typePill"
                              >
                                {type1.type.name}
                              </Badge>
                            )}
                          </Grid>
                        );
                      })}
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body>
                    <Text className="pokemonSubtitle">pokedex number</Text>
                    <Text className="pokemonDetails">{data.id}</Text>
                    <Card.Divider />
                    <Text className="pokemonSubtitle">height</Text>
                    <Text className="pokemonDetails">{data.height}</Text>
                    <Card.Divider />
                    <Text className="pokemonSubtitle">weight</Text>
                    <Text className="pokemonDetails">{data.weight}</Text>
                    <Card.Divider />
                    <Text className="pokemonSubtitle">shiny</Text>
                    <Grid.Container>
                      <Grid css={{ display: "flex" }}>
                        <Card.Image src={data.sprites.front_shiny}></Card.Image>
                        <Card.Image src={data.sprites.back_shiny}></Card.Image>
                      </Grid>
                    </Grid.Container>
                  </Card.Body>
                </Container>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Layout>
    </Grid.Container>
  );
}
export const getServerSideProps = async ({ query: { name } }: any) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
