import FiltroCard from '../../components/Filtrocard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} ativo={false} />
        <FiltroCard legenda="Concluidas" contador={2} ativo={false} />
        <FiltroCard legenda="Urgentes" contador={3} ativo={false} />
        <FiltroCard legenda="Importantes" contador={4} ativo={false} />
        <FiltroCard legenda="Normal" contador={5} ativo={false} />
        <FiltroCard legenda="Todas" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
