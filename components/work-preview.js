import Image from "next/image";

export default function WorkPreview({ preview }) {
  return (
    <div>
      <Image
        src={preview.image}
        alt={preview.name}
        width={640}
        height={480}
        className="bg-slate-100 rounded"
      ></Image>
      <div className="text-base md:text-lg lg:text-xl mt-4">
        <span className="float-right font-bold">{preview.year}</span>
        <h3 className="font-bold">{preview.name}</h3>
        <p className="mt-2 mb-4">{preview.description}</p>
        {preview.link && (
          <a
            href={preview.link}
            className="italic hover:underline hover:decoration-wavy"
          >
            {preview.linkCopy} &#8594;
          </a>
        )}
      </div>
    </div>
  );
}
