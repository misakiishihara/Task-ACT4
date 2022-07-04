//supabaseからnoticeを取得するためのフック
import { useQuery } from "react-query";
import { supabase } from "../utils/supabase";
import { Notice } from "../types/types";

export const useQueryNotices = () => {
    // fetching supabase
    const getNotices = async () => {
        const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('createdAt', {ascending: true})

        if (error) {
            throw new Error(error.message)
        }
        return data
    }
    return useQuery<Notice[], Error>({
        queryKey: 'notices',
        queryFn: getNotices,
        // to refetch
        staleTime: 0, //[ms]
        refetchOnWindowFocus: true
    })
}