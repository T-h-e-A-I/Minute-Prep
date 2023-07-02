import {
  Flex,
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const User: React.FC = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => {
    if (isLogged) {
      setIsLogged(!isLogged);
    } else {
      navigate("/login");
    }
  };
  return (
    <Flex alignItems={"center"}>
      {isLogged ? (
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"sm"}
              src={
                "https://media.licdn.com/dms/image/D5603AQFB9pLX5mytvQ/profile-displayphoto-shrink_800_800/0/1680773468211?e=1694044800&v=beta&t=7CvVCSPL_g4OSGYUjbXp8cRo2IfaWSAs2Zpa3IGXPnY"
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <Button
              width="100%"
              background="red"
              color="white"
              onClick={handleLogin}
            >
              LogOut
            </Button>
          </MenuList>
        </Menu>
      ) : (
        <Button
          width="100%"
          background="blue.500"
          color="white"
          onClick={handleLogin}
        >
          LogIn
        </Button>
      )}
    </Flex>
  );
};
export default User;
