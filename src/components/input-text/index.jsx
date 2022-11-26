import * as S from "./styled.js";

const InputText = ({ updateValue, validateValue, value }) => {
  function handleChange(e) {
    validateValue(e.target.value);
    updateValue(e.target.value);
  }

  return (
    <S.TextBox
      className="textBox"
      type="text"
      name="textbox"
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputText;
