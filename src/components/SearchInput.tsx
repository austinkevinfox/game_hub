import { useRef } from "react";
import {
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from "@chakra-ui/react";
import { BsApp, BsSearch, BsXCircle } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    const clearSearch = () => {
        if (ref?.current) {
            ref.current.value = "";
            onSearch("");
        }
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (ref?.current) {
                    onSearch(ref.current.value);
                }
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games ..."
                    variant="filled"
                />
                <InputRightElement
                    children={
                        <IconButton
                            aria-label="Search database"
                            isRound={true}
                            isDisabled={
                                ref === null || ref?.current?.value === ""
                            }
                            icon={<BsXCircle />}
                            onClick={clearSearch}
                        />
                    }
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
