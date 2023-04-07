import joel from '../JoelHilton.jpg';

function Home2() {
  return (
    <div>
      <br />
      <img
        src={joel}
        className="rounded mx-auto d-block"
        alt="JoelHiltonHeadShot"
      ></img>
      <br />
      <h1 className="text-center">
        Welcome to the Joel Hilton Movie Collection
      </h1>
    </div>
  );
}

export default Home2;
