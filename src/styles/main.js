import styled from "styled-components";

const Button = styled.button`
  background-color: hsla(314, 35%, 50%, 1);
  color: white;
  border: none;
  margin-right: 20px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 3px;
  transition: 0.4s background-color;
  &:hover {
    background-color: hsla(314, 35%, 50%, 0.6);
  }
`;

const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  background-color: hsla(10, 100%, 0%, 0.9);
  color: black;
`;

const InputField = styled.input`
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  outline: none;
  width: calc(100% - 50px);
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  outline: none;
  width: calc(100% - 50px);
`;

const Pill = styled.div`
  padding: 2px 5px;
  display: inline-block;
  text-align: center;
  background-color: hsla(314, 35%, 50%, 1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-transform: uppercase;
  color: white;
`;

const Checkbox = styled.div`
  background-color: white;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 0 0 4px hsla(314, 35%, 50%, 1) inset;
  position: relative;
  outline: none;
  box-sizing: border-box;
`;

const Mesg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  padding: 10px 20px;
  border-radius: 3px;
  min-width: 30%;
`;

const CancelButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  transition: background-color 0.2s;
  width: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: red;
  color: white;
  &:hover {
    background-color: rgba(255, 0, 0, 0.6);
  }
`;

export {
  Button,
  Section,
  Mesg,
  Checkbox,
  TextArea,
  InputField,
  Pill,
  CancelButton
};
