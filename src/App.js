import React from "react";
import "./styles.css";

import {
  Container,
  Header,
  Body,
  Content,
  Aside,
  Footer
} from "react-holy-grail-layout";

export default function App() {
  return (
    <Container>
      <Header p={2}>
        <div className="header-main-page">
          <div className="left-side">
            <span id="title">NAIMITSU</span>
          </div>
          <div className="right-side">privacy matters</div>
        </div>
      </Header>
      <Body>
        <Content p={2} id="content">
          Privacy matters. Join the user-owned internet.
          <br />
          <br />
          <br />
          <span id="japanese-text">内密</span>
          <br />
          Noun
          <br />
          privacy; secrecy; confidentiality
          <br />
          <br />
          <br />
          <a href="https://discord.gg/invite/TPCsSEE">Join the Discord</a>
        </Content>
        <Aside left primary p={2} />
        <Aside right p={2} />
      </Body>
      <Footer p={2}>2020</Footer>
    </Container>
  );
}
