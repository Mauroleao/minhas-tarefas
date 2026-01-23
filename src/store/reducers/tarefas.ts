import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../components/utils/enuns/tarefa'

const initialState: Tarefa[] = [
  new Tarefa(
    'Estudar TypeScript',
    enums.Prioridade.URGENTE,
    enums.Status.PENDENTE,
    '',
    1
  ),
  new Tarefa(
    'Fazer exercícios',
    enums.Prioridade.URGENTE,
    enums.Status.PENDENTE,
    '',
    2
  ),
  new Tarefa(
    'Almoçar',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    '',
    3
  )
]

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.findIndex((t) => t.id === action.payload.id)
      if (indexDaTarefa >= 0) {
        state[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
