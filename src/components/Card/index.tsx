import * as S from './style';

export type image = {
  path: string;
};

type CharacterProps = {
  id: number;
  name: string;
  thumbnail: image;
  description: string;
  key: number;
};
//   { character }: CharacterProps

const Card = ({ ...props }: CharacterProps) => {
  const Img = props.thumbnail.path;
  const imgVariant = '/portrait_incredible';
  const extension = '.jpg';

  const imageResult = `${Img}${imgVariant}${extension}`;

  console.log(imageResult);
  return (
    <S.Container>
      <S.Card key={props.id}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <a href="/">ver detalhes</a>
      </S.Card>
      <S.Image src={imageResult} />
    </S.Container>
  );
};

export default Card;
