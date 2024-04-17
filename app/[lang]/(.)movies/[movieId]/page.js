import { getDataByID } from "@/DB/manageData";
import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";
import { getDictionary } from "@/dictionaries/dictionaries";

const MovieDetail = async ({ params: { lang, movieId } }) => {
  const navItems = await getDictionary(lang);

  const data = await getDataByID(Number(movieId));

  //TODO: here i am not using notfound page case use can't open a modal with wrong movie id . if do then use will fall back to app router system

  return (
    <Modal>
      <MovieDetails navItems={navItems} data={data} />
    </Modal>
  );
};

export default MovieDetail;
