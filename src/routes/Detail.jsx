import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const getMovie = async () => {
    const json = await await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie;
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
