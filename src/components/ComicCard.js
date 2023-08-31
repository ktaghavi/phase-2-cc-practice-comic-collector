import React, {useState} from "react"

function ComicCard({comic, deleteComic}) {
  const [renderImage, setRenderImage] = useState(true)

  function toggleRenderImage() {
    setRenderImage(prev =>!prev)
  }

  function handleDelete() {
    deleteComic(comic)
    fetch(`http://localhost:8004/comics/${comic.id}`, {
      method: "DELETE"
  })
}

  return (
    <div className="comic-item">
      {renderImage
      ? 
      <img src={comic.image_url} alt={comic.title} onClick={toggleRenderImage}/>
      :
      <>
      <h3 onClick={toggleRenderImage}>{comic.title}</h3>
      <h4 onClick={toggleRenderImage}>{comic.issue}</h4>
      <button onClick={handleDelete}>Remove</button>
      </>
      }
    </div>
  )

}

export default ComicCard
