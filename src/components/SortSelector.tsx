import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    sortOrder: string;
    onSelectSortOrder: (value: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
    const sortOptions = [
        { value: "", label: "Relevance" },
        { value: "added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "released", label: "Release data" },
        { value: "metacritic", label: "Popularity" },
        { value: "rating", label: "Average rating" },
    ];
    const currentSortOrder =
        sortOptions.find((option) => option.value === sortOrder)?.label ||
        "Relevance";

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />} mb={4}>
                {`Order by: ${currentSortOrder}`}
            </MenuButton>
            <MenuList>
                {sortOptions.map((option) => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                        onClick={() => onSelectSortOrder(option.value)}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
