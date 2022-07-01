//types of tasks in Supabase//
export type Task = {
        id: string
        createdAt: string
        title: string
        user_id: string | undefined
}
//types of notices in Supabase//
export type Notice = {
    id: string
    createdAt: string
    content: string
    user_id: string | undefined
}