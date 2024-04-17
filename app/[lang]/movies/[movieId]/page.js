import { getDataByID } from "@/DB/manageData";
import MovieDetails from "@/components/MovieDetails";
import { getDictionary } from "@/dictionaries/dictionaries";
import NotFoundMovie from "../not-found";

const MovieDetail = async ({ params: { lang, movieId } }) => {
  const navItems = await getDictionary(lang);

  const data = await getDataByID(Number(movieId));

  if (data.length >= 1) {
    return <MovieDetails navItems={navItems} data={data} />;
  }
  return <NotFoundMovie movieId={movieId} />;
};

export default MovieDetail;
