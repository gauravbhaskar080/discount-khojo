import styled from "styled-components";

const NotFound = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(68, 68, 68);
    min-height: 80vh;

    h2 {
      font-size: 55px;
    }
    p {
      font-size: 20px;
    }
  `;

  return (
    <Container>
      <h2>404</h2>
      <p>Page not found</p>
    </Container>
  );
};

export default NotFound;
