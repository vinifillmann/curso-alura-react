import React from "react"
import TarefaInterface from "../../interfaces/TarefaInterface"
import Botao from "../Botao"
import style from "./Formulario.module.scss"
import { v4 as uuidv4 } from "uuid"

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<TarefaInterface[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>): void {
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state, selecionado: false, completado: false, id: uuidv4()}])
        console.log("state: ", this.state)
        this.setState({
            tarefa: "",
            tempo: "00:00:00"
        })
    }

    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step={1}
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario