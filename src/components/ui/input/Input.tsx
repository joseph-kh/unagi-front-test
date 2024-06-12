import { InputContainer, InputLabel, FormInput } from './Input.elements';
import { ErrorMessage } from '../../ui';

interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const Input = ({
  label,
  placeholder,
  type,
  errorMessage,
  value,
  onChange,
}: Props) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <FormInput
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value || ''}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
};

export default Input;
