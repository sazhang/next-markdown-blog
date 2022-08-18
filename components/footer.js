export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="container mx-auto flex flex-wrap-reverse sm:flex-nowrap sm:justify-between px-4 lg:px-8 pt-16 pb-8 md:text-lg lg:text-xl">
      <span>Ⓒ {year} Sarah Zhang</span>
      <div className="flex flex-wrap flex-col sm:flex-row w-full sm:w-fit mb-2 sm:mb-0 gap-4 md:gap-8">
        <a
          href="mailto:sarah.hg.zhang@gmail.com"
          className="hover:underline hover:decoration-wavy mb-2 sm:mb-0"
        >
          Contact
        </a>
        <a
          href="https://github.com/sarahzdev"
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:decoration-wavy mb-2 sm:mb-0"
        >
          Github
        </a>
        <a
          href="https://twitter.com/haegeez"
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:decoration-wavy mb-2 sm:mb-0"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/sarahzdev/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:decoration-wavy mb-2 sm:mb-0"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
