"use client";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        {
            'code': 'en',
            'language': 'English',
            'png': '/usa.png'
        },
        {
            'code': 'bn',
            'language': 'Bangla',
            'png': '/bd.png'
        }
    ]
    const found = languages.find(lang => pathname.includes(lang.code));
    const [selectedLanguage, setSelectedLanguage] = useState(found ?? languages[0]);
    const [showMenu, setShowMenu] = useState(false);

    const handleLanguageChange = lang => {

        setSelectedLanguage({ ...selectedLanguage, code: lang, language: lang === 'en' ? 'English' : 'Bangla' });
        setShowMenu(false);
        router.push(`/${lang}`)
    }

    if (pathname.endsWith('en') || pathname.endsWith('bn')) {
        return (
            <div className="flex gap-4 items-center">
                <div className="relative">
                    <button
                        className="flex items-center gap-2"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <Image
                            className="max-w-8"
                            src="/LanguageSwitcher.jpg"
                            alt="bangla"
                            height={100}
                            width={165}
                        />
                        {selectedLanguage.language}
                    </button>
                    {showMenu && (
                        <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-slate-600  p-2 z-10 shadow-lg">
                            {
                                languages.map(entry => (
                                    <li
                                        key={entry.code}
                                        onClick={() => handleLanguageChange(entry.code)}
                                        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-500"
                                    >
                                        <Image
                                            className="max-w-8"
                                            src={entry.png}
                                            alt="bangla"
                                            height={100}
                                            width={165}
                                        />
                                        {entry.language}
                                    </li>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default LanguageSwitcher;
