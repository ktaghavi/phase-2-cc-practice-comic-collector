import React, {useState, useEffect} from "react";
import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"


function App() {
//Create state for comics
  const [comics, setComics] = useState([]);
  //Fetch comics from API once via useEffect
  useEffect(() => {
    fetch("http://localhost:8004/comics")
    .then (r => r.json())
    .then (data => setComics(data));
    }, []);

  //Add comic to state for form functionality
function addComic(comic) {
  setComics([...comics, comic]);
}

function deleteComic(comicToRemove) {
  const filteredComics = comics.filter(comic => comic.id!== comicToRemove.id)
  setComics(filteredComics);
}

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics} deleteComic={deleteComic}/>
        </div>

        <div className="sidebar">
          <ComicForm addComic={addComic} />
        </div>

      </div>


    </div>
  );
}

export default App;
