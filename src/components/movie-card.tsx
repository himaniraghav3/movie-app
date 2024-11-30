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
      className="max-w-64"
      imgAlt="Movie image"
      imgSrc={`https://image.tmdb.org/t/p/w500/${props.imgUrl}`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.year}
      </p>
    </Card>
  );
};
