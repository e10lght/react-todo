import {
    Card,
    CardBody,
    Text,
    Heading,
} from '@chakra-ui/react';

export const Task = (props) => {
    const {
        title,
        subject,
        onClick,
        id,
    } = props;
    return (
        <Card
            bg="gray.100"
            m={5}
            cursor="pointer"
            onClick={() => onClick(id)}
        >
            <Heading size="xs" textTransform="uppercase" p={2}>
                {title}
            </Heading>
            <CardBody pt={2}>
                <Text>{subject}</Text>
            </CardBody>
        </Card>
    );
};
