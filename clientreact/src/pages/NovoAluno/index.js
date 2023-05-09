import React from "react";
import './styles.css';

export default function NovoAluno() {
    return (
        <div className="novo-aluno-container">
            <div className="content">
                <h1>Texto</h1>
                <section className="form">
                </section>
                <form >
                    <input placeholder="Nome" />
                    <input placeholder="Email" />
                    <input placeholder="Idade" />
                    <button className="button" type="submit">Texto</button>
                </form>
            </div>
        </div>
    );
}