import { Grid, Card, Text, Image, Button } from "@nextui-org/react";
function Sidebar() {
  return (
    <Grid.Container justify="center" className="sidebar">
      <Grid lg={6} direction="column" alignItems="center">
        <Image src="../asset/logo.png" alt="Picture of the author" className="logo"></Image>
      </Grid>
      <Grid lg={9} direction="column" alignItems="center">
        <Image src="../asset/avatar.png" alt="Picture of the author" className="logo"></Image>
        <Text className="avatarName">ASHK123</Text>
        <Text className="levelText">level 1</Text>
      </Grid>
      <Grid lg={10} direction="column" alignItems="center">
        <Text className="sidebarMessage">work hard on your test</Text>
      </Grid>
      <Grid lg={12} direction="column" alignItems="center">
        <Button size="lg" className="logOutButton">LOG OUT</Button>
      </Grid>
    </Grid.Container>
  );
}
export default Sidebar;
