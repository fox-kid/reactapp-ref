import './styles.css'

const Header = ({ forwardRef }) => {
    return (
        <header className='header' ref={forwardRef}>
            <h2>This is a header section</h2>
            <div className='header__block'></div>
        </header>
    )
}

export default Header;