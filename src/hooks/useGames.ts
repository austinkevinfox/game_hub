import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (
    selectedGenreId: number | null,
    selectedPlatform: Platform | null
) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: selectedGenreId,
                parent_platforms: selectedPlatform?.id,
            },
        },
        [selectedGenreId, selectedPlatform?.id]
    );

export default useGames;
