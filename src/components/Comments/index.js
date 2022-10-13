import './styles.css'

const Comments = ({ forwardRef }) => { 
    return (
        <div className='comments' ref={forwardRef}>
            <h2>This is the comments section</h2>
            <div className='comments__block'></div>
        </div>
    )
}

export default Comments;