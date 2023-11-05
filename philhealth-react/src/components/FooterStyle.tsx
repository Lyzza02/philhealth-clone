import styled from "styled-components";

export const Box = styled.div`
    padding: 2% 2.5%;
    background: #d3d3d3;
    // position: absolute;
    bottom: 0;
    width: 100%;
 
    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;

export const FooterLink = styled.a`
    color: #000000;
    margin-bottom: 16px;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #000000; /* Set it to the default color or any other desired color */
    }
`;

export const Heading = styled.p`
    font-size: 20px;
    color: #000000;
    margin-bottom: 40px;
    font-weight: bold;
`;