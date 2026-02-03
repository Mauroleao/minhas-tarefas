import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/Filtrocard'

import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

import * as S from './styles'
import * as enums from '../../components/utils/enuns/tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="Pendentes"
            contador={1}
            ativo={false}
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legenda="Concluidas"
            contador={2}
            ativo={false}
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="Urgentes"
            contador={3}
            ativo={false}
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="Importantes"
            contador={4}
            ativo={false}
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="Normal"
            contador={5}
            ativo={false}
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="todas"
            legenda="Todas"
            contador={10}
            ativo
          />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
