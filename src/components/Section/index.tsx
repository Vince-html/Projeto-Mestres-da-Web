import * as S from './style';

type SectionProps = {
  children: React.ReactNode;
};

function Section({ children }: SectionProps) {
  return <S.Wrapper> {children}</S.Wrapper>;
}

export default Section;
