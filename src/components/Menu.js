import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 80px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
`;

const Profile = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 15px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 180px;

  &:hover {
    background-color: #0056b3;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
`;

function Menu({ mostrarTela }) {
  return (
    <Container>
      <Header>
        <Profile>Bem-vindo ao Quiz!</Profile>
      </Header>
      <MenuList>
        <MenuItem>
          <Button onClick={() => mostrarTela("quiz")}>Iniciar Quiz</Button>
        </MenuItem>
        <MenuItem>
          <Button onClick={() => alert("REGRAS DO QUIZ:\n1.Responda as perguntas: Você verá uma pergunta com várias opções de resposta. Escolha a opção que você acha correta.\n\n2.Pontuação: Você ganha 1 ponto por cada resposta correta.\n\n3.Resultado final: Ao final, você verá a quantidade de respostas corretas e sua pontuação total.\n\n4.Reiniciar: Você pode tentar o quiz novamente para melhorar sua pontuação. ")}>Regras</Button>
        </MenuItem>
        <MenuItem>
          <Button onClick={() => alert("Sobre o Melodia Mágica\n\nBem-vindo ao nosso Quiz Melodia Mágica! 🎶🎉\n\nAqui, as crianças podem aprender sobre música de maneira divertida e interativa, testando seus conhecimentos com perguntas sobre instrumentos musicais, sons, e muito mais! Nosso quiz foi criado especialmente para os pequenos, com perguntas fáceis e divertidas que tornam o aprendizado um verdadeiro jogo.")}>Sobre</Button>
        </MenuItem>
      </MenuList>
      <Button onClick={() => mostrarTela("login")}>Sair</Button>
    </Container>
  );
}

export default Menu;