import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    background-color: #2196f3;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    margin-left: 10px;
  }

  input {
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
    margin-right: 10px;
    flex: 1;
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;