//types of tasks in Supabase//
export type Task = {
    id: string
    created_at: string
    title: string
    user_id: string | undefined
}
//types of notices in Supabase//
export type Notice = {
    id: string
    created_at: string
    content: string
    user_id: string | undefined
}
export type EditedTask = Omit<Task, 'created_at' | 'user_id'>
export type EditedNotice = Omit<Notice, 'created_at' | 'user_id'>