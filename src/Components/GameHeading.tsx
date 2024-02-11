import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platform } = usePlatforms();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const platforms = platform?.results.find(
    (g) => g.id === gameQuery.platformId
  );

  const heading = ` ${platforms?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={3} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
