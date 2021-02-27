// import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

// import { RootState } from '../index';

// export type TodoType = {
//   id: string;
//   text: string;
//   isCompleted: boolean;
// };

// const name = 'todo';
// export const initialState: TodoType[] = [];

// const slice = createSlice({
//   name,
//   initialState,
//   reducers: {
//     addTodo: (state, { payload }: PayloadAction<string>) => {
//       state.push({ id: nanoid(), text: payload, isCompleted: false });
//     },
//     deleteTodo: (state, { payload }: PayloadAction<string>) => {
//       return state.filter(task => task.id !== payload);
//     },
//     toggleTodoCompleted: (state, { payload }: PayloadAction<string>) => {
//       return state.map(task =>
//         task.id === payload
//           ? { ...task, isCompleted: !task.isCompleted }
//           : task,
//       );
//     },
//   },
// });

// export const { addTodo, deleteTodo, toggleTodoCompleted } = slice.actions;
// export const selectTodos = (state: RootState) => state.todo;

// export default slice.reducer;

const slice = createSlice({ name: '', initialState: '', reducers: {} });

export default slice.reducer;
