import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: number | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    const [sortOrder, setSortOrder] = useState<string>("");

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        selectedGenreId={gameQuery.genre}
                        onSelectGenre={(id) =>
                            setGameQuery({ ...gameQuery, genre: id })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area="main" padding={10}>
                <HStack spacing={5} mb={5}>
                    <PlatformSelector
                        selectedPlatform={gameQuery.platform}
                        onSelectPlatform={(platform) =>
                            setGameQuery({ ...gameQuery, platform })
                        }
                    />
                    <SortSelector
                        sortOrder={sortOrder}
                        onSelectSortOrder={(value) => setSortOrder(value)}
                    />
                </HStack>

                <GameGrid gameQuery={gameQuery} sortOrder={sortOrder} />
            </GridItem>
        </Grid>
    );
}

export default App;
