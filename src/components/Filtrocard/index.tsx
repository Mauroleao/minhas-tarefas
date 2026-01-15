import * as S from './styles'

export type Props = {
  ativo: boolean
}

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>3</S.Contador>
    <S.label>pendentes</S.label>
  </S.Card>
)

export default FiltroCard
