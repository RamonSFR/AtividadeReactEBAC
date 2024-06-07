import { useState, useEffect } from 'react';
import styles from './Form.module.css';

function Form() {
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [estado, setEstado] = useState('');

    const calculaImc = () => {
        if (peso && altura) {
            return (peso / (altura * altura)).toFixed(2);
        }
        return null;
    };

    useEffect(() => {
        if (imc) {
            let estadoTemp = '';
            if (imc < 18.5) {
                estadoTemp = 'abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                estadoTemp = 'normal';
            } else if (imc >= 25 && imc <= 29.9) {
                estadoTemp = 'com sobrepeso';
            } else if (imc >= 30 && imc <= 34.9) {
                estadoTemp = 'com obesidade grau 1';
            } else if (imc >= 35 && imc <= 39.9) {
                estadoTemp = 'com obesidade grau 2';
            } else if (imc >= 40) {
                estadoTemp = 'com obesidade grau 3';
            }
            setEstado(estadoTemp);
        }
    }, [imc]);

    const handleCalcularClick = () => {
        const calculadoImc = calculaImc();
        setImc(calculadoImc);
    };

    const renderizaResultado = () => {
        if (peso && altura) {
            return (
                <div className={styles.resultado}>
                    <p>{nome}, seu IMC é de: <span>{imc}</span></p>
                    <p>Você está <span>{estado}</span></p>
                </div>
            );
        } else {
            return (
                <div className={styles.resultado}>
                    <p>Preencha o formulário corretamente!</p>
                </div>
            );
        }
    };

    return (
        <section className={styles.formArea}>
            <form className={styles.form}>
                <div className={styles.input}>
                    <label className='label' htmlFor="nome">Digite seu Nome:</label>
                    <input
                        onBlur={e => setNome(e.target.value)}
                        className={styles.input}
                        type="text"
                        name='nome'
                    />
                </div>

                <div className={styles.input}>
                    <label className='label' htmlFor="peso">Digite seu Peso:</label>
                    <input
                        onBlur={e => setPeso(parseFloat(e.target.value))}
                        className={styles.input}
                        type="number"
                        name='peso'
                    />
                </div>

                <div className={styles.input}>
                    <label className='label' htmlFor="altura">Digite sua Altura:</label>
                    <input
                        onBlur={e => setAltura(parseFloat(e.target.value))}
                        className={styles.input}
                        type="number"
                        name='altura'
                    />
                </div>

                <button
                    onClick={handleCalcularClick}
                    className={styles.button}
                    type="button"
                >
                    Calcular
                </button>
            </form>

            {imc && renderizaResultado()}
        </section>
    );
}

export default Form;
