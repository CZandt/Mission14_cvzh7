import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';

function MovieCollection2() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <br />
      <div className="d-flex align-items-center justify-content-center">
        <h3>The Movie Collection</h3>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-9">
            <div className="card">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Year</th>
                    <th>Rating</th>
                    <th>Category</th>
                    <th>Notes</th>
                    <th>Edited</th>
                    <th>Lent To</th>
                  </tr>
                </thead>

                <tbody>
                  {movieData
                    .filter((x) => x.edited == 'Yes')
                    .map((m) => (
                      <tr>
                        <td>{m.title}</td>
                        <td>{m.director}</td>
                        <td>{m.year}</td>
                        <td>{m.rating}</td>
                        <td>{m.category}</td>
                        <td>{m.notes}</td>
                        <td>{m.edited ? 'True' : true}</td>
                        <td>{m.lentTo}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default MovieCollection2;
