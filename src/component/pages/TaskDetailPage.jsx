import {
    Box,
    FormLabel,
    FormControl,
    Input,
    Textarea,
    VStack,
    Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../atoms/PrimaryButton';
import { Header } from '../molecules/Header';

export const TaskDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeSubject = (e) => setSubject(e.target.value);
    const onChangeBody = (e) => setBody(e.target.value);

    const dispatch = useDispatch();

    const onClickUpdate = (e) => {
        e.preventDefault();
        const payload = {
            id: location.state.targettask.id,
            title,
            subject,
            body,
        };
        navigate('/list');
        // 更新したら一覧画面に戻る
        return (dispatch({ type: 'update', payload }));
    };
    const onClickBack = () => navigate('/list');

    useEffect(() => {
        setTitle(location.state.targettask.title);
        setSubject(location.state.targettask.subject);
        setBody(location.state.targettask.body);
    }, []);

    return (
        <>
            <Header />
            <Box
                p={3}
                mt={10}
                mr={10}
                ml={10}
                bg="gray.100"
                borderRadius={10}
                boxShadow="0px 0px 15px -5px #777777"
            >
                <FormControl p={3}>
                    <FormLabel>
                        タイトル
                    </FormLabel>
                    <Input
                        value={title}
                        onChange={onChangeTitle}
                    />
                </FormControl>
                <VStack />
                <FormControl p={3}>
                    <FormLabel>
                        件名
                    </FormLabel>
                    <Input
                        value={subject}
                        onChange={onChangeSubject}
                    />
                </FormControl>
                <FormControl p={3}>
                    <FormLabel>
                        内容
                    </FormLabel>
                    <Textarea
                        value={body}
                        h={200}
                        onChange={onChangeBody}
                        mb={10}
                    />
                </FormControl>
                <Flex
                    align="center"
                    justify="space-between"
                >
                    <PrimaryButton onClick={onClickBack}>戻る</PrimaryButton>
                    <PrimaryButton onClick={onClickUpdate}>修正する</PrimaryButton>
                </Flex>
            </Box>
        </>
    );
};
