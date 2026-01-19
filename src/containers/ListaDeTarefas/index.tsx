import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'baixa',
    status: 'concluida',
    
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'fatura claro',
    prioridade: 'media',
    status: 'pendente',
    
  },
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'urgente',
    status: 'pendente',
    
  },
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente',
    
  }


]

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
            
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
