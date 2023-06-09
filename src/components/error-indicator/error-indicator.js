import './error-indicator.css'
import icon from './droid.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" height="150px"/>
            <span className="boom">BOOM!</span>
            <span>
                Something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator;