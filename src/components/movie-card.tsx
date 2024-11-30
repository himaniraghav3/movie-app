import { Card } from "flowbite-react";
import { FC } from "react";

interface MovieCardProps {
  name: string;
  year: string;
  imgUrl: string;
}

export const MovieCard: FC<MovieCardProps> = (props) => {
  return (
    <Card
      className="w-64 bg-zinc-900 border-none"
      imgAlt="Movie image"
      imgSrc={`https://image.tmdb.org/t/p/w500/${props.imgUrl}`}
    >
      <h5 className="text-base font-bold tracking-tight text-gray-100 dark:text-white">
        {props.name}
      </h5>
      <p className="font-normal text-sm text-gray-300">{props.year}</p>
    </Card>
  );
};
