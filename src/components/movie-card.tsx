import { Card } from "flowbite-react";
import { FC } from "react";
import { Link } from "../router";

interface MovieCardProps {
  id: string;
  name: string;
  year: string;
  imgUrl: string;
}

export const MovieCard: FC<MovieCardProps> = (props) => {
  return (
    <Link to={`/movies/:id`} params={{ id: props.id }}>
      <Card
        className="w-64 bg-zinc-900 border-none hover:bg-zinc-800 hover:opacity-75"
        imgAlt="Movie image"
        imgSrc={`https://image.tmdb.org/t/p/w500/${props.imgUrl}`}
      >
        <h5 className="text-base font-bold tracking-tight text-gray-100 dark:text-white">
          {props.name}
        </h5>
        <p className="font-normal text-sm text-gray-300">{props.year}</p>
      </Card>
    </Link>
  );
};
