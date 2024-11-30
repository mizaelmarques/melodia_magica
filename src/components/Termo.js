import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Termo({ mostrarTela }) {
  return (
    <Container>
      <Title>Termo de Uso e Política de Privacidade</Title>
      <Text>
      Antes de acessar o quiz, você precisa aceitar nosso termo de responsabilidade.
       Ao continuar, você concorda com as condições estabelecidas.
       O Termo de Uso e a Política de Privacidade na Receita Federal foram elaborados 
       em conformidade com a Lei Federal nº 12.965, de 23 de abril de 2014 (Marco Civil da Internet),
        e com a Lei Federal nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais)
      </Text>
      <Button onClick={() => mostrarTela("login")}>Aceitar</Button>
    </Container>
  );
}

export default Termo;
