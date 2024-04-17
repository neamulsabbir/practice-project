import { getData } from "@/DB/data";
import MovieCard from "@/components/MovieCard";
import { getDictionary } from "@/dictionaries/dictionaries";

const MovieContainer = async ({ params: { lang } }) => {
  const data = await getData();
  const navItems = await getDictionary(lang);
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 overflow-auto w-auto max-h-svh invisible-scrollbar ">
      {data?.results.map((result) => (
        <MovieCard key={result.id} data={result} btnName={navItems?.details} />
      ))}
    </div>
  );
};

export default MovieContainer;
