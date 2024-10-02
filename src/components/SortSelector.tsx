import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


const SortSelector = () => {
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />} mb={4}>
              Order by: Relevance
          </MenuButton>
          <MenuList>
              <MenuItem>Relevance</MenuItem>
              <MenuItem>Date added</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>Release date</MenuItem>
              <MenuItem>Popularity</MenuItem>
              <MenuItem>Average rating</MenuItem>
              {/* {data.map((platform) => (
                  <MenuItem
                      key={platform.id}
                      onClick={() => onSelectPlatform(platform)}
                  >
                      {platform.name}
                  </MenuItem>
              ))} */}
          </MenuList>
      </Menu>
  );
}

export default SortSelector