import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
`;

const Input = styled.input`
  display: block;
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
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

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Message = styled.p`
  color: ${(props) => (props.success ? "green" : "red")};
  font-size: 16px;
  margin-top: 10px;
`;

function Login({ mostrarTela }) {
  const [usersDatabase, setUsersDatabase] = useState([
    { username: "admin", password: "123456" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("login");

  const handleLogin = () => {
    const user = usersDatabase.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setMessage("Login bem-sucedido!");
      mostrarTela("menu");
    } else {
      setMessage("Usuário ou senha incorretos.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (mode === "login") {
        handleLogin();
      } else if (mode === "register") {
        handleRegister();
      } else if (mode === "forgotPassword") {
        handleForgotPassword();
      }
    }
  };

  const handleRegister = () => {
    if (!username || !password) {
      setMessage("Preencha todos os campos.");
      return;
    }

    const userExists = usersDatabase.some((user) => user.username === username);

    if (userExists) {
      setMessage("Usuário já cadastrado.");
    } else {
      setUsersDatabase([...usersDatabase, { username, password }]);
      setMessage("Usuário registrado com sucesso!");
      setMode("login");
    }
  };

  const handleForgotPassword = () => {
    const userExists = usersDatabase.some((user) => user.username === username);

    if (userExists) {
      setMessage("Instruções de recuperação enviadas ao seu e-mail.");
    } else {
      setMessage("Usuário não encontrado.");
    }
  };

  return (
    <Container tabIndex="0" onKeyDown={handleKeyDown}>
      <h1>MELODIA MÁGICA</h1>
      <h1>{mode === "login" ? "Login" : mode === "register" ? "Registrar" : "Recuperar Senha"}</h1>
      <Input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {mode !== "forgotPassword" && (
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      {mode === "login" && <Button onClick={handleLogin}>Entrar</Button>}
      {mode === "register" && <Button onClick={handleRegister}>Registrar</Button>}
      {mode === "forgotPassword" && (
        <Button onClick={handleForgotPassword}>Recuperar Senha</Button>
      )}
      {message && <Message success={message.includes("sucesso") || message.includes("enviadas")}>{message}</Message>}
      <p>
        {mode !== "register" && <Link onClick={() => setMode("register")}>Registrar</Link>}
        {mode !== "forgotPassword" && mode === "login" && (
          <> | <Link onClick={() => setMode("forgotPassword")}>Esqueceu a senha?</Link></>
        )}
        {mode !== "login" && <> | <Link onClick={() => setMode("login")}>Voltar ao Login</Link></>}
      </p>
    </Container>
  );
}

export default Login;



// import React, { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   text-align: center;
//   padding: 20px;
//   color: white;
// `;

// const Input = styled.input`
//   display: block;
//   width: 90%;
//   margin: 10px auto;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Link = styled.a`
//   color: #007bff;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Message = styled.p`
//   color: ${(props) => (props.success ? "green" : "red")};
//   font-size: 16px;
//   margin-top: 10px;
// `;

// function Login({ mostrarTela }) {
//   const [usersDatabase, setUsersDatabase] = useState([
//     { username: "admin", password: "123456" },
//     { username: "user1", password: "password1" },
//     { username: "user2", password: "password2" },
//   ]);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [mode, setMode] = useState("login");

//   const handleLogin = () => {
//     const user = usersDatabase.find(
//       (user) => user.username === username && user.password === password
//     );

//     if (user) {
//       setMessage("Login bem-sucedido!");
//       mostrarTela("menu");
//     } else {
//       setMessage("Usuário ou senha incorretos.");
//     }
//   };

//   const handleRegister = () => {
//     if (!username || !password) {
//       setMessage("Preencha todos os campos.");
//       return;
//     }

//     const userExists = usersDatabase.some((user) => user.username === username);

//     if (userExists) {
//       setMessage("Usuário já cadastrado.");
//     } else {
//       setUsersDatabase([...usersDatabase, { username, password }]);
//       setMessage("Usuário registrado com sucesso!");
//       setMode("login");
//     }
//   };

//   const handleForgotPassword = () => {
//     const userExists = usersDatabase.some((user) => user.username === username);

//     if (userExists) {
//       setMessage("Instruções de recuperação enviadas ao seu e-mail.");
//     } else {
//       setMessage("Usuário não encontrado.");
//     }
//   };

//   return (
//     <Container>
//       <h1>MELODIA MÁGICA</h1>
//       <h1>{mode === "login" ? "LOGIN" : mode === "register" ? "Registrar" : "Recuperar Senha"}</h1>
//       <Input
//         type="text"
//         placeholder="Usuário"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       {mode !== "forgotPassword" && (
//         <Input
//           type="password"
//           placeholder="Senha"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       )}
//       {mode === "login" && (
//         <Button onClick={handleLogin}>Entrar</Button>
//       )}
//       {mode === "register" && (
//         <Button onClick={handleRegister}>Registrar</Button>
//       )}
//       {mode === "forgotPassword" && (
//         <Button onClick={handleForgotPassword}>Recuperar Senha</Button>
//       )}
//       {message && <Message success={message.includes("sucesso") || message.includes("enviadas")}>{message}</Message>}
//       <p>
//         {mode !== "register" && (
//           <Link onClick={() => setMode("register")}>Registrar</Link>
//         )}
//         {mode !== "forgotPassword" && mode === "login" && (
//           <> | <Link onClick={() => setMode("forgotPassword")}>Esqueceu a senha?</Link></>
//         )}
//         {mode !== "login" && (
//           <> | <Link onClick={() => setMode("login")}>Voltar ao Login</Link></>
//         )}
//       </p>
//     </Container>
//   );
// }

// export default Login;








// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   text-align: center;
//   padding: 20px;
//   color: white;
// `;

// const Input = styled.input`
//   display: block;
//   width: 90%;
//   margin: 10px auto;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Link = styled.a`
//   color: #007bff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// function Login({ mostrarTela }) {
//   const login = () => mostrarTela("menu");

//   return (
//     <Container>
//       <h1>Login</h1>
//       <Input type="text" placeholder="Usuário" />
//       <Input type="password" placeholder="Senha" />
//       <Button onClick={login}>Entrar</Button>
//       <p>
//         <Link href="#">Esqueceu a senha?</Link> | <Link href="#">Registrar</Link>
//       </p>
//     </Container>
//   );
// }

// export default Login;