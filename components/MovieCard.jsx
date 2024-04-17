import Image from "next/image";
import Link from "next/link";


const MovieCard = ({ data, btnName }) => {

    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Link href={`/movies/${data.id}`}>
                <Image
                    className="w-full object-cover"
                    loading="eager"
                    src={data?.poster_path}
                    width={300}
                    height={450}
                    alt="Movie Poster"
                />
            </Link>
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{data?.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                <div className="flex items-center space-x-1 mb-5">
                    {[...Array(5)].map((_, index) => (
                        <Image key={index} src="/assets/star.svg" width={14} height={14} alt="Star" />
                    ))}
                </div>
                <Link href={`/movies/${data.id}`} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">

                    <Image src="/assets/tag.svg" width={16} height={16} alt="Tag" />
                    <span>{btnName}</span>

                </Link>
            </figcaption>
        </figure>
    );
};

export default MovieCard;
