import styled from 'styled-components';

export const Root = styled.div`
  /* .class {} */
`;

export const Category = styled.button`
  background-color: #979797;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
`;

export const H2Text = styled.h2`
  position: absolute;
  top: 10%;
  left: 50%;
  color: #000000;
  transform: translateX(-50%);
`;

export const Horizontal = styled.div`
  display: flex;
  justify-content: left;
`;

export const HorizontalUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-left: 0;
  padding-inline-start: 17%;
`;

export const CategoryUlLi = styled.li`
  list-style: none;
  justify-content: center;
  padding: 3px;
  margin: 3px 0;
`;

export const SearchBtn = styled.button`
  background-color: #00462a;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /*왼쪽으로 요소의 50% 너비만큼 이동*/
`;

export const ResultIcon = styled.img`
  padding-top: 20px;
  padding-bottom: 20px;
  left: 50%;
`;

export const GreenBG = styled.div`
  background-color: #e5ede4;
  color: white;
  width: 50px;
  height: 600px;
  padding: 50px;
`;
