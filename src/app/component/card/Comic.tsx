import Image from "next/image";

export function CardComic(comic: IComic) {
  return (
    <div key={comic.id} className="bg-zinc-900 rounded-lg shadow-md flex">
      <div className="w-48 h-48 relative">
        <div className="">
          <Image
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg text-zinc-200 font-semibold mb-2">
          {comic.title}
        </h3>
        <p className="text-zinc-300 mb-4">{comic.description}</p>
      </div>
    </div>
  );
}
