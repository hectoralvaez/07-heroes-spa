import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";

export const HeroPage = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const heroe = getHeroeById(id);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if ( !heroe ) {
    return <Navigate to="/marvel" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`/assets/heroes/${id}.jpg`}
          alt={heroe.superheroe} />
      </div>
      <div className="col-8">
          <h1>{ heroe.superhero}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego:</b> {heroe.alter_ego} </li>
            <li className="list-group-item"><b>Publisher:</b> {heroe.publisher} </li>
            <li className="list-group-item"><b>First Appearance:</b> {heroe.first_appearance} </li>
          </ul>
          <h2>Characters</h2>
          <p>{ heroe.characters}</p>

          <button
            className="btn btn-outline-primary"
            onClick={onNavigateBack}>
            Back
          </button>
      </div>
    </div>
  )
}
