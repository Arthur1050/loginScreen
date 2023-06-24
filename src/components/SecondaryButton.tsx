import { Button} from "@chakra-ui/react";

interface SecondaryButtonInterface {
    text: string,
    onclick?: () => void
}

export default function SecondaryButton({text, onclick} : SecondaryButtonInterface) {
    return (
        <Button colorScheme='purple' onClick={onclick} variant='outline'>{text}</Button>    
    )
} 