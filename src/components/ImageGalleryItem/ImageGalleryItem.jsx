import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, tags, openModal, largeImageURL }) => {
    return (
        <li>
            <img
                src={url}
                alt={tags}
                onClick={() => openModal(largeImageURL, tags)}
            />
        </li>
    )
}
ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}
export default ImageGalleryItem