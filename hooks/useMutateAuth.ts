import { useState } from "react";
import { supabase } from "../utils/supabase";
import { useMutation } from "react-query";

export const useMutateAuth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const reset = () => {
        setEmail('')
        setPassword('')
    }
    //loginbutton event 
    const loginMutation = useMutation(
       async () => {
        const { error } = await supabase.auth.signIn({ email, password })
        if (error) throw new Error(error.message)
       },
       //error
       {
        onError: (err: any) => {
            alert(err.message)
            reset()
        },
       }
    )
    //create a new user
    const registerMutation = useMutation(
        async () => {
            const { error } = await supabase.auth.signUp({ email, password })
            if (error) throw new Error(error.message)
           },
           //error
           {
            onError: (err: any) => {
                alert(err.message)
                reset()
            },
           }
    )
    return {
        email,
        setEmail,
        password,
        setPassword,
        loginMutation,
        registerMutation,
    }
}