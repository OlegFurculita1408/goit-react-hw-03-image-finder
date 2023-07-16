import { Component } from "react";
import PropTypes from 'prop-types';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown)
    }
    onKeyDown = e => {
        if(e.code === 'escape') {
            this.props.onModalClick();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown)
    }

    onBackDroClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onModalClick()
        }
    }


render() {
    const { largeImageURL, alt } = this.props;

    return(
        <div className="overlay" onClick={this.onBackDroClick}>
            <div className="modal">
                <img src={largeImageURL} alt={alt} />
            </div>
        </div>
        )
    }
}
Modal.propTypes = {
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onModalClick: PropTypes.func.isRequired,
}