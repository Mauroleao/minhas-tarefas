import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../components/utils/enuns/tarefa'



const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState: [
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

    ],
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            return state.filter(tarefa => tarefa.id !== action.payload)
        }
    }
}) 


export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
