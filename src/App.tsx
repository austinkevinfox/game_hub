import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
    const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
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
                    <GenreList selectedGenreId={selectedGenreId} onSelectGenre={(id) => setSelectedGenreId(id)} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid selectedGenreId={selectedGenreId} />
            </GridItem>
        </Grid>
    );
}

export default App;
