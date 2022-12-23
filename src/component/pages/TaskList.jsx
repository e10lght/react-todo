import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../molecules/Header';
import { Task } from '../organism/Task';
import { TaskDetailModal } from '../organism/TaskDetailModal';

export const TaskList = () => {
    const tasklist = useSelector((state) => state.tasklistReducer.tasklist);

    const [task, selectedTask] = useState(tasklist[0]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const navigate = useNavigate();
    const onClickTask = (id) => {
        onOpen();
        const targettask = tasklist.find((value) => value.id === id);
        selectedTask(targettask);
        // 遷移する場合
        // navigate('/list/task', { state: { targettask } });
    };

    return (
        <>
            <Header />
            {
                tasklist.map((data) => (
                    <Task
                        key={data.id}
                        title={data.title}
                        subject={data.subject}
                        onClick={onClickTask}
                        id={data.id}
                    />
                ))
            }
            <TaskDetailModal
                isOpen={isOpen}
                onClose={onClose}
                task={task}
            />
        </>
    );
};
