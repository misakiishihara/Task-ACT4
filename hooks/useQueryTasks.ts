// //supabaseからtaskを取得するためのフック
// import { useQuery } from "react-query";
// import { supabase } from "../utils/supabase";
// import { Task } from "../types/types";

// export const useQueryTasks = () => {
//     // fetching supabase
//     const getTasks = async () => {
//         const { data, error } = await supabase
//         .from('tasks')
//         .select('*')
//         .order('createdAt', {ascending: true})

//         if (error) {
//             throw new Error(error.message)
//         }
//         return data
//     }
//     return useQuery<Task[], Error>({
//         queryKey: 'tasks',
//         queryFn: getTasks, 
//         staleTime: Infinity,
//     })
// }

import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { Task } from '../types/types'

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      throw new Error(error.message)
    }
    return data
  }
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,
    staleTime: Infinity,
  })
}