import { getDictionary } from "@/dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";

const SideBar = async ({ lang }) => {

    const navItems = await getDictionary(lang);

    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                    >
                        <Image
                            src="/assets/icons/trending.svg"
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span>{navItems.trending}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                    >
                        <Image
                            src="/assets/icons/newRelease.svg"
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span>{navItems.newReleases}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                    >
                        <Image
                            src="/assets/icons/commingSoon.svg"
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span>{navItems.comingSoon}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                    >
                        <Image
                            src="/assets/icons/favourite.svg"
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span>{navItems.favourites}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                    >
                        <Image
                            src="/assets/icons/watchLater.svg"
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span>{navItems.watchLater}</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default SideBar;
