import './styles.css';

const Buttons = ({ header, main, comments, aboutUs, references }) => {
    const handleClick = (props) => {
        props.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className='actions'>
            <button className='btn btn--header' onClick={() => handleClick(header)}>Go to header</button>
            <button className='btn btn--main' onClick={() => handleClick(main)}>Go to main</button>
            <button className='btn btn--comments' onClick={() => handleClick(comments)}>Go to comments</button>
            <button className='btn btn--aboutUs' onClick={() => handleClick(aboutUs)}>Go to about us</button>
            <button className='btn btn--references' onClick={() => handleClick(references)}>Go to references</button>
        </div>
    )
}

export default Buttons;