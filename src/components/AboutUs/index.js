import './styles.css'

const AboutUs = ({ forwardRef }) => { 
    return (
        <div className='aboutUs' ref={forwardRef}>
            <h2>This is the about us section</h2>
            <div className='aboutUs__block'></div>
        </div>
    )
}

export default AboutUs;