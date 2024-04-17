import Image from "next/image";

const MovieDetails = ({ navItems, data }) => {
    const { title, backdrop_path, poster_path, release_date, popularity, overview, vote_average, vote_count } = data[0];
    return (
        <section>
            <div>
                <Image className="w-full object-cover max-h-[300px] lg:max-h-[500px]" height={500} width={1000} src={backdrop_path} alt="" />
            </div>

            <div className="grid grid-cols-12 py-12 gap-8">
                <div className="col-span-2">
                    <Image height={500} width={100} src={poster_path} alt="" />
                </div>
                <div className="col-span-8">
                    <h2 className="font-bold text-slate-300 text-2xl">{title}</h2>
                    <p className="my-2 text-slate-400 italic">{overview}</p>
                    <ul className="text-slate-300 space-y-2 my-8">
                        <li>{navItems?.releaseDate} : 2024-03-27</li>
                        <li>{navItems?.averageVote} : {vote_average}</li>
                        <li>{navItems?.voteCount} : {vote_count}</li>
                        <li>{navItems?.popularity} :  {popularity}</li>
                    </ul>
                </div>
                <div className="col-span-2 space-y-4">
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {navItems.streamInHD}
                    </button>
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {navItems.downloadInHD}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;
