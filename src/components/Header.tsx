import { Grid, Card, Text, Navbar, Avatar, Image } from "@nextui-org/react";
function Header() {
  return (
    <Navbar
      isBordered
      variant="sticky"
      css={{
        $$navbarBackgroundColor: "#566CD6",
        $$navbarBlurBackgroundColor: "#566CD6",
      }}
    >
      <Navbar.Content
        css={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Image src="../asset/logo.png" className="logo"></Image>
      </Navbar.Content>
    </Navbar>
  );
}
export default Header;
