import * as S from './style';

// type InputProps = {
//   name: string;
//   type: string;
//   value?: string;
//   placeholder: string;
// };

const Input = ({ ...props }) => {
  return <S.Input {...props} />;
};

export default Input;
