import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
    sortOrder: string;
}

declare type SortType = keyof Game;

const GameGrid = ({ gameQuery, sortOrder }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const [sortedData, setSortedData] = useState<Game[]>([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const skeletons =
        data?.length > 0 ? new Array(data.length).keys() : [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        setIsDataLoading(true);
        let tmpSortedData = [...data];
        if (sortOrder) {
            const comparator = (a: Game, b: Game): number => {
                const propertyA = a[sortOrder as SortType];
                const propertyB = b[sortOrder as SortType];

                if (
                    typeof propertyA === "number" &&
                    typeof propertyB === "number"
                ) {
                    return propertyB - propertyA;
                } else {
                    if (propertyA < propertyB) {
                        return -1;
                    }
                    if (propertyA > propertyB) {
                        return 1;
                    }
                    return 0;
                }
            };

            tmpSortedData.sort(comparator);
        }
        setSortedData(tmpSortedData);
        setIsDataLoading(false);
    }, [data, sortOrder]);

    useEffect(() => {
        setIsDataLoading(true);
    }, [gameQuery]);

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
                {isDataLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {sortedData.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
