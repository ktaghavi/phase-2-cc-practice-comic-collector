import ComicCard from "./ComicCard"

function ComicsContainer({comics, deleteComic}) {
  
  
  return (
    //Map over the comics array and send each individual comic to the Comic component
    <>
      {comics.map(comic => <ComicCard key={comic.id} comic={comic} deleteComic={deleteComic}/>)}
    </>
  )

}

export default ComicsContainer
