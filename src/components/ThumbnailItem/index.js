// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, updateSelectedImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const selectedThumbnail = isActive ? 'selected-thumbnail' : ''
  const onClickImage = () => {
    updateSelectedImageId(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-button" onClick={onClickImage}>
        <img
          className={`thumbnail-image ${selectedThumbnail}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
