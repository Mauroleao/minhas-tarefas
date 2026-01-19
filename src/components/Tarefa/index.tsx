import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome da tarefa</S.Titulo>
    <S.Tag>Importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Descricao>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </S.Descricao>
    <S.BarraAcoes>
      <S.Botao>Concluir</S.Botao>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Excluir</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Tarefa
