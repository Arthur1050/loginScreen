import { Button} from "@chakra-ui/react";

interface PrimaryButtonInterface {
    text: string,
    onclick?: () => void
}

export default function PrimaryButton({text, onclick} : PrimaryButtonInterface) {
    return (
        <Button colorScheme='purple' onClick={onclick}>{text}</Button>    
    )
} 