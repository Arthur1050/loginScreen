import { Button} from "@chakra-ui/react";

interface PrimaryButtonInterface {
    text: string
}

export default function PrimaryButton({text} : PrimaryButtonInterface) {
    return (
        <Button colorScheme='purple'>{text}</Button>    
    )
} 