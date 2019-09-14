import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  -webkit-appearance: none;

  /* small */
  /* padding: 3px 10px;
  font-size: 12px;
  line-height: 20px; */

  /* primary */
  /* ${p =>
    p.mode === "primary" &&
    `
    color: #fff;
    background-color: #28a745;
    background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  `} */
`;

export default Button;
