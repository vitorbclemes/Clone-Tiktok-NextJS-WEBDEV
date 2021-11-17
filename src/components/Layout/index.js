import Header from "../Header";
import SideBar from "../SideBar";
import { Container, SidebarContainer, ContentContainer } from "./styles";


function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container>
        <SidebarContainer>
          <SideBar />
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  )
}

export default Layout;