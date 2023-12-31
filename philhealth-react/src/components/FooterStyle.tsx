import styled from "styled-components";

export const Box = styled.div`
  padding: 2% 2.5%;
  background: #329900;
  width: 100%;
 
  @media (max-width: 1000px) {
    // Adjust styles for smaller screens
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // Create 5 equal columns
  grid-gap: 20px;
 
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #FFFFFF;
  margin-bottom: 16px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #FFFFFF;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 20px;
  font-weight: bold;
`;
