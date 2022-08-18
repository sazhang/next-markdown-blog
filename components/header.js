export default function Header() {
  return (
    <header className="container mx-auto flex flex-wrap justify-between items-center px-4 lg:px-8 py-8">
      <span className="text-xl md:text-2xl lg:text-3xl font-bold">
        Sarah Zhang
      </span>
      <div className="flex md:text-lg lg:text-xl gap-4 md:gap-8">
        <a href="#work" className="hover:underline hover:decoration-wavy">
          Work
        </a>
        <a
          href="/files/sarah-zhang-resume-2022.pdf"
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:decoration-wavy"
        >
          Resume
        </a>
        <a
          href="mailto:sarah.hg.zhang@gmail.com"
          className="hover:underline hover:decoration-wavy"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
