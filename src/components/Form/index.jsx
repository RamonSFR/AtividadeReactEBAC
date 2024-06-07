import styles from './Form.module.css'

function Form() {
    return (
        <section className={styles.form}>
            <form>
                <input type="text" name='nome' placeholder='Seu nome'/>
            </form>
        </section>
    )
}

export default Form;