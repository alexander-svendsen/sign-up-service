import React from 'react';
import {IconButton} from "@chakra-ui/core";
import {useColorMode} from "@chakra-ui/core/dist";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const mode = colorMode === "light" ? "moon" : "sun";
    return (
        <header>
            <IconButton aria-label="Change dark/light mode"
                        variant="outline"
                        onClick={toggleColorMode}
                        icon={mode} />
        </header>
    )

};

export default Header