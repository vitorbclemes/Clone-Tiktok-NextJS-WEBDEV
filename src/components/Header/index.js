import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="https://p16-va.tiktokcdn.com/img/musically-maliva-obj/6b924222ebb2c9fd154d1735a3762cbb~c5_720x720.jpeg"></img>
          </Avatar>
        </OptionsContainer>

      </Content>
    </Container>
  )
}

export default Header;