import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import TarefaInterface from '../interfaces/TarefaInterface';
import style from "./App.module.scss"

function App() {
  const [tarefas, setTarefas] = useState<TarefaInterface[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro/>
    </div>
  );
}

export default App;
