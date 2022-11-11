import styled from "styled-components/macro";

export const NewsHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 2em;
  gap: 2.5em;

  .news-img {
    max-width: 15vw;
    min-width: 250px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .news-txt {
    width: 75%;
    line-height: 1.2;
    h1 {
      font-size: clamp(55px, 6vw, 85px);
      font-weight: 800;
    }
    p {
      font-size: clamp(20px, 2.5vw, 30px);
      font-weight: 400;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .news-txt {
      text-align: center;
      width: 100%;
    }
  }
  @media (max-width: 450px) {
    .news-txt {
      line-height: 1;
    }
  }
`;

export const NewsContainerGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, auto));
  place-content: center;
  grid-gap: 1.5em;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }

  @media (max-width: 450px) {
    row-gap: 1.5em;
  }
`;

export const NewsCardStyled = styled.div`
  background: #fff;
  border-radius: 26px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.2px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5em;
  max-width: 450px;

  .news-header {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 2.5%;
    .news-img {
      width: clamp(110px, 4vw, 135px);
    }

    .news-title {
      width: 80%;
      line-height: 1.2;
      strong {
        font-size: clamp(15px, 2.5vw, 18px);
      }
    }
    @media (max-width: 450px) {
      .news-title {
        line-height: 1;
      }
    }
  }
  .news-description {
    margin: 1.25em 0em;
    p {
      font-size: clamp(12px, 2.5vw, 15px);
    }
  }
  /* provider */
  .provider-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #484848;
  }

  .provider-align {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 00.5em;
  }

  .provider-img {
    max-width: 100%;
    max-height: 100%;
    width: 28px;
    border-radius: 50%;
    border: 1px solid #d3d3d3;
  }

  .provider-name,
  .provider-date {
    p {
      font-size: clamp(10px, 2.5vw, 14px);
      color: #000;
    }
  }

  :hover {
    transition: 500ms;
    box-shadow: 0 4px 30px #f7a528;
  }
`;

export const LoadMoreContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 2.5em 0em;

  .loadBtn {
    align-items: center;
    width: 30%;
    justify-content: center;
    padding: 15px 25px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: #fff;
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
    overflow: hidden;
  }

  .loadBtn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #f7a528;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  .loadBtn:hover {
    color: #fff;
  }

  .loadBtn:hover::before {
    width: 100%;
  }
`;
