import * as S from './style';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
