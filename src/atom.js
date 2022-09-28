import { atom } from "recoil";

export const atomText = atom({
    key: 'textState',
    default: 'hello world'
})