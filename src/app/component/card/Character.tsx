import Image from "next/image";

export function CharacterCard(character: ICharacter) {
  return (
    <div key={character.id} className="bg-zinc-900 rounded-3xl mx-2 my-4">
      <div className="p-4 flex flex-col items-center w-full h-full ">
        <div className=" overflow-hidden object-fill">
          <Image
            className="w-full rounded-3xl mx-auto"
            width={248}
            height={248}
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </div>
        <h3 className="text-lg font-semibold text-zinc-200 mt-2">
          {character.name}
        </h3>
        <p className="text-zinc-300"> {character.description}</p>
      </div>
    </div>
  );
}
