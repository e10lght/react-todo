import {
    FormControl,
    Input,
    Box,
    Stack,
    Flex,
    Heading,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../atoms/PrimaryButton';
import { LOGIN_FLAG } from '../../constant/type';

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickLogin = () => {
        dispatch({ type: LOGIN_FLAG });
        navigate('/list');
    };
    return (
        <Flex
            align="center"
            justify="center"
        >
            <Box pt="48">
                <FormControl
                    bg="white"
                    pt={10}
                    pb={10}
                    pr={38}
                    pl={38}
                    borderRadius={10}
                    boxShadow="0px 0px 15px -5px #777777"
                >
                    <Heading size="lg" textAlign="center">タスク管理アプリ</Heading>
                    <Stack spacing={5} py={4} px={10}>
                        <Input
                            type="text"
                            placeholder="パスワードを入力"
                            autoFocus
                        />
                        <PrimaryButton
                            onClick={onClickLogin}
                        >
                            ログイン
                        </PrimaryButton>
                    </Stack>
                </FormControl>
            </Box>
        </Flex>
    );
};
