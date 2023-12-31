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
import { useContext } from "react";
import { SettingsIcon, BellIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { LoggedInContext, LoggedInContextType } from "../../App";

const User: React.FC = () => {
  const navigate = useNavigate();
  const { loggedIn, updateLoginValue }: LoggedInContextType =
    useContext(LoggedInContext);
  const handleLogin = () => {
    if (loggedIn) {
      updateLoginValue("logout");
    } else {
      navigate("/login");
    }
  };
  return (
    <Flex alignItems={"center"}>
      {loggedIn ? (
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
          <MenuList pb={0}>
            <MenuItem>
              <BellIcon padding="1px" />
              Notifications
            </MenuItem>
            <MenuItem>
              <SettingsIcon padding="1px" />
              Settings
            </MenuItem>
            <MenuDivider></MenuDivider>
            <Button
              width="100%"
              mb={0}
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
