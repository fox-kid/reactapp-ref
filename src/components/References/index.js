import './styles.css'

const References = ({ forwardRef }) => { 
    return (
        <div className='references' ref={forwardRef}>
            <h2>This is the references section</h2>
            <div className='references__block'></div>
        </div>
    )
}

export default References;