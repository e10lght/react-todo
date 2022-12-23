/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Heading, Flex, Spacer, Box, ButtonGroup,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Header = () => {
    const dispatch = useDispatch();
    const onClickLogout = () => {
        dispatch({ type: 'login' });
    };
    return (
        <Flex
            align="center"
            justify="space-between"
            h="14"
            bg="messenger.800"
            color="gray.100"
            minWidth="max-content"
            alignItems="center"
            gap="2"
        >
            <Box p="5">
                <Heading size="md">
                    <Link to="#">タスク管理アプリ</Link>
                </Heading>
            </Box>
            <Spacer />
            <ButtonGroup p="5">
                {/* <a href="/">ログアウト</a> */}
                <Link to="/" onClick={onClickLogout}>ログアウト</Link>
            </ButtonGroup>
        </Flex>
    );
};
