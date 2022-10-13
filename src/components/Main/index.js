import './styles.css'

const Main = ({ forwardRef }) => {
    return (
        <section className='main' ref={forwardRef}>
            <h2>This is the main section</h2>
            <div className='main__block'></div>
        </section>
    )
}

export default Main;