export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="container mx-auto flex flex-wrap-reverse sm:flex-nowrap sm:justify-between px-4 lg:px-8 pt-16 pb-8 md:text-lg lg:text-xl">
      <span>Ⓒ {year} Sarah Zhang</span>
      <div className="flex flex-wrap flex-col sm:flex-row w-full sm:w-fit mb-2 sm:mb-0">
        <a
          href="mailto:sarah.hg.zhang@gmail.com"
          className="underline mb-2 sm:mb-0 sm:mx-4"
        >
          Contact
        </a>
        <a
          href="https://github.com/sazhang"
          target="_blank"
          rel="noreferrer"
          className="underline mb-2 sm:mb-0 sm:mx-4"
        >
          Github
        </a>
        <a
          href="https://twitter.com/haegeez"
          target="_blank"
          rel="noreferrer"
          className="underline mb-2 sm:mb-0 sm:mx-4"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/szhang96/"
          target="_blank"
          rel="noreferrer"
          className="underline mb-2 sm:mb-0 sm:mx-4"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
