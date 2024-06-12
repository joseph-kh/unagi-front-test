import { InputContainer, InputLabel, FormInput } from './Input.elements';
import { ErrorMessage } from '../../ui';

interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
}
const Input = ({ label, placeholder, type, errorMessage }: Props) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <FormInput placeholder={placeholder} type={type} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
};

export default Input;
