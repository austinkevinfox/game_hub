import { Game } from "../hooks/useGames";
import {
    Card,
    CardBody,
    Fade,
    Heading,
    HStack,
    Image,
    Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent="space-between" mt={1} mb={3}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map(
                            ({ platform }) => platform
                        )}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize={{ sm: "sm", md: "md", lg: "lg", xl: "2xl" }}>
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
