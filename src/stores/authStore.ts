import { writable } from "svelte/store";
import {auth} from "../lib/firebase/firebase.client";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import type { User } from 'firebase/auth';
import { goto } from '$app/navigation';
/*
export const authStore = writable({
    loading:true,
    user: User|null,
    data:[]
})
*/
export const authStore = writable<{
	user: User | null,
    loading:Boolean,
    data:any[]

}>({
	user: null, 
    loading:true,
    data:[]


});




export const authHandlers={
    signup: async (email:any, pass:any)=>{
        await createUserWithEmailAndPassword(auth, email, pass)
        goto('/Home');
    },
    login: async (email:any, pass:any) => {
        await signInWithEmailAndPassword(auth, email, pass)
        goto('/Home');
    },
    logout: async () => {
        await signOut(auth)
        goto('/');
    }
}