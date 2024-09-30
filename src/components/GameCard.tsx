import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={{ sm: "sm", md: "md", lg: "lg", xl: "2xl" }}>
                    {game.name}
                </Heading>
                <PlatformIconList
                    platforms={game.parent_platforms.map(
                        ({ platform }) => platform
                    )}
                />
            </CardBody>
        </Card>
    );
};

export default GameCard;
