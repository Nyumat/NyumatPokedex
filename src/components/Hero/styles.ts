import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: min-content;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    margin-left: 1.5rem;
    font-size: 1.5rem;
    margin-right: 1.5rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    background: #000;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #fff;
      color: #000;
    }

    &:active {
      transform: scale(0.95);
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
  }
};
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  scale: 0.6;
  width: 100%;
  height: calc(100% - 4rem);
  object-fit: cover;
`;

export const PokemonName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;



export const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 400px;
  `;

export const SubSplit = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;

  @media (max-width: 768px) {
    flex: 100%;
  }

`;

export const Line = styled.hr`
  height: 255px;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #ff0000, #ff7f00, #ffff00) 1;
  border-image-slice: 1;
`;


export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: max-content;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const Content = styled.p`
  font-weight: 400;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
`;

