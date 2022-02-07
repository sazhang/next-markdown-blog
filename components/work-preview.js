export default function WorkPreview({
  name,
  description,
  date,
  link,
  linkDescription,
}) {
  const parsedDate = new Date(date);
  const [month, year] = [
    parsedDate.toLocaleString("default", { month: "short" }),
    parsedDate.getFullYear(),
  ];

  return (
    <div className="flex flex-wrap sm:flex-nowrap py-6 sm:py-8 lg:py-10">
      <div className="w-full sm:w-4/12 pr-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 sm:mb-2 lg:mb-4">
          {name}
        </h3>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl uppercase">
          {month} {year}
        </span>
      </div>
      <div className="w-full sm:w-8/12">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-8">
          {description}
        </p>
        <a
          href={link}
          className="md:text-lg lg:text-xl underline"
          target="_blank"
          rel="noreferrer"
        >
          {linkDescription} ↗
        </a>
      </div>
    </div>
  );
}
