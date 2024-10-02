import {
    Box,
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    selectedGenreId: number | null;
    onSelectGenre: (id: number) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (isLoading) return <Spinner />;

    if (error) return null;

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            onClick={() => onSelectGenre(genre.id)}
                            w="100px"
                            fontSize="lg"
                            fontWeight={
                                genre.id === selectedGenreId ? "bold" : "normal"
                            }
                            colorScheme={
                                genre.id === selectedGenreId ? "green" : "white"
                            }
                            variant="link"
                        >
                            <Box w="50%">{genre.name}</Box>
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
