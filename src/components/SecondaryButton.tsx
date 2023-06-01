import { Button} from "@chakra-ui/react";

interface SecondaryButtonInterface {
    text: string
}

export default function SecondaryButton({text} : SecondaryButtonInterface) {
    return (
        <Button colorScheme='purple' variant='outline'>{text}</Button>    
    )
} 