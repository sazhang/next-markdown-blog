export default function WorkPreview({
  name,
  description,
  date,
  status,
  link,
  linkDescription,
  roles,
}) {
  const parsedDate = new Date(date);
  const [month, year] = [
    parsedDate.toLocaleString("default", { month: "short" }),
    parsedDate.getFullYear(),
  ];

  return (
    <div className="flex flex-wrap sm:flex-nowrap py-8 sm:py-10 lg:py-12 border-b">
      <div className="w-full sm:w-4/12 sm:pr-8 mb-2 sm:mb-0">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          {name}
        </h3>
      </div>
      <div className="w-full sm:w-8/12">
        <span className="text-base md:text-lg lg:text-xl">
          {month} {year} &mdash; <i>{status}</i>
        </span>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 lg:mt-6 mb-8 lg:mb-10">
          {description}
        </p>
        <div>
          {roles.map((role) => (
            <span
              key={`${name}_${role}`}
              className="text-sm md:text-base lg:text-lg px-4 py-1 border border-solid rounded-full mr-2"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
