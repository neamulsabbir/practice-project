import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";

export default function cineRentalLayout({ children, params: { lang } }) {
  return (
    <>
      <body className="bg-dark text-white">
        <header>
          <Nav />
        </header>
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar lang={lang} />
            <div className="content">{children}</div>
          </div>
        </main>
        <div id="modal-root-content" />
      </body>
    </>
  );
}
