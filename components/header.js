export default function Header() {
  return (
    <header className="container mx-auto flex flex-wrap justify-between items-center px-4 lg:px-8 py-8">
      <span className="text-xl md:text-2xl lg:text-3xl font-bold">
        Sarah Zhang
      </span>
      <div className="flex md:text-lg lg:text-xl">
        <a href="#work" className="mx-2 sm:mx-4 hover:underline">
          Work
        </a>
        <a
          href="/files/sarah-zhang-resume-2022.pdf"
          target="_blank"
          rel="noreferrer"
          className="mx-2 sm:mx-4 hover:underline"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
