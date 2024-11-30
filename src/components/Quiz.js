import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
`;

const Question = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Options = styled.div`
  margin: 20px 0;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Feedback = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const NextButton = styled.button`
  margin-top: 20px;
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

const ResultMessage = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const Quiz = ({ mostrarTela }) => {
  const questions = [
        {
          question: "Qual destes instrumentos é tocado com um arco?",
          options: ["Guitarra", "Violino", "Piano", "Flauta"],
          correctAnswer: 1, 
        },
        {
          question: "O que é uma bateria?",
          options: ["Um instrumento de cordas", "Um instrumento de vento", "Um instrumento de percussão", "Um instrumento de teclas"],
          correctAnswer: 2,
        },
        {
          question: "Qual destes instrumentos você toca assoprando?",
          options: ["Violão", "Trompete", "Cavaquinho", "Pandeiro"],
          correctAnswer: 1, 
        },
        {
          question: "Qual é o nome do instrumento com teclas brancas e pretas?",
          options: ["Violão", "Harpa", "Trombone", "Piano"],
          correctAnswer: 3, 
        },
        {
          question: "Qual destes instrumentos é tocado batendo com as mãos?",
          options: ["Violino", "Piano", "Pandeiro", "Guitarra"],
          correctAnswer: 2, 
        },
        {
          question: "Qual destes instrumentos é conhecido por seu som grave?",
          options: ["Guitarra", "Contra-Baixo", "Violino", "Flauta"],
          correctAnswer: 1, 
        },
        {
          question: "O que é uma flauta?",
          options: ["Um instrumento de cordas", "Um instrumento de percussão", "Um instrumento de vento", "Um instrumento de teclas"],
          correctAnswer: 2, 
        },
        {
          question: "Qual instrumento tem cordas?",
          options: ["Harpa", "Piano", "Pandeiro", "Trompete"],
          correctAnswer: 0, 
        },
        {
          question: "Qual destes instrumentos possui teclas e cordas e é tocado com os dedos?",
          options: ["Acordeão", "Violão", "Piano", "Trompete"],
          correctAnswer: 0, 
        },
        {
          question: "Qual instrumento musical é tocado com as mãos e tem um som metálico e brilhante?",
          options: ["Pandeiro", "Triângulo", "Maracas", "Harpa"],
          correctAnswer: 1, 
        },
      ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (index) => {
    if (answered) return;

    const isCorrect = index === questions[currentQuestionIndex].correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correto!");
    } else {
      setFeedback("Errado!");
    }

    setAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswered(false);
      setFeedback("");
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <Container>
      {!quizFinished ? (
        <>
          <Question>{questions[currentQuestionIndex].question}</Question>
          <Options>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <OptionButton key={index} onClick={() => handleAnswer(index)}>
                {option}
              </OptionButton>
            ))}
          </Options>
          {answered && <Feedback>{feedback}</Feedback>}
          <NextButton onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1
              ? "Finalizar Quiz"
              : "Próxima Pergunta"}
          </NextButton>
        </>
      ) : (
        <>
          <ResultMessage>
            Você acertou {score} de {questions.length} perguntas!
          </ResultMessage>
          <NextButton onClick={() => mostrarTela("menu")}>
            Voltar ao Menu
          </NextButton>
        </>
      )}
    </Container>
  );
};

export default Quiz;
