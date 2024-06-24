import { baseApi } from "../api/baseApi";

const tasksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Tasks']
        }),
        getArchiveTasks: builder.query({
            query: () => '/tasks-archive',
            providesTags: ['Tasks']
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task
            }),
            invalidatesTags: ['Tasks']
        }),
        updateTasks: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: builder.mutation({
            query: ({ id }) => ({
                url: `/tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tasks']
        })
    })
})

export const { useGetTasksQuery, useGetArchiveTasksQuery, useUpdateTasksMutation, useAddTaskMutation, useDeleteTaskMutation
} = tasksApi