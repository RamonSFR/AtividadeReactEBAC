import styles from './Form.module.css'

function Form() {
    return (
        <section className={styles.formArea}>
            <form className={styles.form}>
                <div className={styles.input}>
                    <label className='label' htmlFor="nome">Digite seu Nome:</label>
                    <input className={styles.input} type="text" name='nome' required/>
                </div>

                <div className={styles.input}>
                    <label className='label' htmlFor="peso">Digite seu Peso:</label>
                    <input className={styles.input} type="number" name='peso' required/>
                </div>

                <div className={styles.input}>
                    <label className='label' htmlFor="altura">Digite sua Altura:</label>
                    <input className={styles.input} type="number" name='altura' required/>
                </div>
                
                <button className={styles.button} type="button">Calcular</button>
            </form>

            <div className={styles.resultado}>
                <p>Ramon, seu IMC é de: <span>12,75</span></p>
                <p>Você está com <span>SOBREPESO</span></p>
            </div>
        </section>
    )
}

export default Form;