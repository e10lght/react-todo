/* eslint-disable */
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel,
    FormControl,
    Input,
    Textarea,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { PrimaryButton } from '../atoms/PrimaryButton';
import { UPDATE_FLAG } from '../../constant/type';

export const TaskDetailModal = (props) => {
    const { isOpen, onClose, task } = props;
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const dispatch = useDispatch();

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeSubject = (e) => setSubject(e.target.value);
    const onChangeBody = (e) => setBody(e.target.value);

    const onClickUpdate = () => {
        onClose();
        const payload = { id: task.id, title: title, subject: subject, body: body }
        return (dispatch({ type: UPDATE_FLAG, payload }))
    }

    useEffect(() => {
        setTitle(task.title)
        setSubject(task.subject)
        setBody(task.body)
    }, [task])

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w={420} mr={5} ml={5}>
                    <ModalHeader>
                        <FormControl>
                            <FormLabel>
                                タイトル
                            </FormLabel>
                            <Input
                                value={title}
                                onChange={onChangeTitle}
                            />
                        </FormControl>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>
                                件名
                            </FormLabel>
                            <Input
                                value={subject}
                                onChange={onChangeSubject}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>
                                内容
                            </FormLabel>
                            <Textarea
                                value={body}
                                h={200}
                                onChange={onChangeBody}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <PrimaryButton onClick={onClickUpdate}>修正する</PrimaryButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
