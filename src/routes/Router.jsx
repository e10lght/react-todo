import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginForm } from '../component/pages/LoginForm';
import { TaskDetailPage } from '../component/pages/TaskDetailPage';
import { TaskList } from '../component/pages/TaskList';

export const Router = () => {
    const loginFlag = useSelector((state) => state.loginFlagReducer.flag);

    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/list" element={loginFlag ? <TaskList /> : <Navigate to="/" />} />
            <Route path="/*" element={<LoginForm />} />
            {/* 遷移する場合 */}
            <Route path="/list/task" element={loginFlag ? <TaskDetailPage /> : <LoginForm />} />
        </Routes>
    );
};
