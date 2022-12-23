/* eslint-disable default-param-last */
import { UPDATE_FLAG } from '../constant/type';

const tasklist = {
    tasklist: [
        {
            id: 1,
            title: 'タイトルです',
            subject: 'ここがタイトルの件名です',
            body: '1ここがタイトルの内容ですここがタイトルの内容ですここがタイトルの内容ですここがタイトルの内容です',
        },
        {
            id: 2,
            title: 'タイトル2',
            subject: 'ここがタイトルの件名です2',
            body: '2ここがタイトルの内容ですここがタイトルの内容ですここがタイトルの内容ですここがタイトルの内容です',
        },
        {
            id: 3,
            title: 'タイトル3',
            subject: 'ここがタイトルの件名です3',
            body: '3ここがタイトルの内容ですここがタイトルの内容ですここがタイトルの内容ですここがタイトルの内容です',
        },
        {
            id: 4,
            title: 'タイトル4',
            subject: 'ここがタイトルの件名です4',
            body: '4ここがタイトルの内容ですここがタイトルの内容ですここがタイトルの内容ですここがタイトルの内容です',
        },
    ],
};

export const tasklistReducer = (state = tasklist, action) => {
    switch (action.type) {
        case UPDATE_FLAG: {
            // 更新対象の要素を取得する
            const target = state.tasklist.find((task) => task.id === action.payload.id);
            if (!target) return state;
            // 更新対象の前後の要素くぉ取得し、配列として取得した要素と更新対象の要素を連結する
            return {
                tasklist: [
                    ...state.tasklist.slice(0, state.tasklist.indexOf(target)),
                    {
                        ...action.payload,
                    },
                    ...state.tasklist.slice(state.tasklist.indexOf(target) + 1),
                ],
            };
        }
        default:
            return state;
    }
};
