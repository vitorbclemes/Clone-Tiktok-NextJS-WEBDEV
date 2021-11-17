import { Container, MenuItem, Following, FollowingHeader, InfoContainer, Links } from "./styles"
import User from "../User";

function SideBar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg"></img>
        <span>Para voce</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg"></img>
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User user={{
          name: 'Will Smith',
          username: 'willSmith',
          avatar: 'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1646315618666501~c5_100x100.jpeg'
        }} ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Inicio</a>
          <a>Sobre</a>
          <a>Sala de Imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Seguranca</a>
        </Links>
        <Links>
          <a>Diretrizes da Comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>© 2021 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  )
}

export default SideBar;