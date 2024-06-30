export default function Home() {
  return (
    <main className="relative flex flex-wrap xl:flex-nowrap">
      <article className="xl:sticky xl:top-0 min-h-screen xl:h-screen xl:min-h-0 xl:w-1/2">
        <div className="h-full max-w-screen-md ml-auto grid grid-cols-6 gap-4 p-4">
          <h1 className="col-span-6 font-medium text-xl">Sarah Zhang</h1>
          <p className="col-span-6 md:col-span-4 text-xl">
            A designer who builds delightful experiences and friendly
            interfaces, with an intuition for transforming the abstract into the
            tangible. Making sense of the world through wayfinding and play.
          </p>
          <table className="col-span-6 md:col-span-4 h-44 border-separate border-spacing-y-1">
            <caption className="text-left italic">Work Experience</caption>
            <tbody>
              <tr>
                <td className="text-neutral-500">Current</td>
                <td>
                  Founding Designer at{" "}
                  <a
                    href="https://howie.ai"
                    className="underline hover:no-underline"
                  >
                    Howie AI
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-neutral-500">2022-2023</td>
                <td>
                  Design Engineer at{" "}
                  <a
                    href="https://litprotocol.com"
                    className="underline hover:no-underline"
                  >
                    Lit Protocol
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-neutral-500">2022-2022</td>
                <td>
                  Product Lead at{" "}
                  <a
                    href="https://techcrunch.com/2021/11/16/racket-social-audio-app/"
                    className="underline hover:no-underline"
                  >
                    Racket
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-neutral-500">2021-2022</td>
                <td>
                  Frontend Developer at{" "}
                  <a
                    href="https://miketrap.medium.com/the-newest-social-audio-app-racket-2be7b976f1cb"
                    className="underline hover:no-underline"
                  >
                    Racket
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-neutral-500">2020-2021</td>
                <td>
                  Frontend Developer at{" "}
                  <a
                    href="https://www.vendr.com/blog/capiche-acquisition"
                    className="underline hover:no-underline"
                  >
                    Capiche
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <footer className="col-span-6 md:col-span-4 flex gap-8 items-end text-neutral-500">
            <a
              href="mailto:sarah.hg.zhang@gmail.com"
              className="underline hover:no-underline"
            >
              Contact
            </a>
            <a
              href="https://github.com/sarahzdev"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sarahzdev"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              LinkedIn
            </a>
            <a
              href="/sarah-zhang-2024.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Resume
            </a>
          </footer>
        </div>
      </article>
      <aside className="bg-white xl:w-1/2">
        {/* <div className="max-w-screen-md mr-auto p-4"></div> */}
      </aside>
    </main>
  );
}
