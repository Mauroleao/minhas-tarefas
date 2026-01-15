import FiltroCard from '../../components/Filtrocard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={true} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
