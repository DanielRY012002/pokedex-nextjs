import React from "react";
import { Container, Grid, Card, Text, Row } from "@nextui-org/react";
import PokemonListC from "@/components/PokemonListC";
import Sidebar from "@/components/Sidebar";
import { PokemonList } from "@/interfaces/PokemonList";
import Header from "./Header";
type DashboardLayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <Grid.Container css={{maxHeight:"100vh", overflow:"hidden"}}>
      <Grid md={3} xs={0}>
        <Sidebar/>
      </Grid>
      <Grid lg={0} md={0} xs={12}>
        <Header/>
      </Grid>
      <Grid md={9} xs={12} css={{height:"100%"}}>
        {children}
      </Grid>
    </Grid.Container>
  );
}
