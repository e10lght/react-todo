import { Button } from '@chakra-ui/react';

export const PrimaryButton = (props) => {
    const { children, onClick } = props;
    return (
        <Button
            colorScheme="messenger"
            _hover={{ opacity: 0.8 }}
            onClick={onClick}
            textAlign="center"
        >
            {children}
        </Button>
    );
};
