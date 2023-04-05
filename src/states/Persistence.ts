import {recoilPersist} from "recoil-persist"

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

export const {persistAtom} = recoilPersist({
  key: "blog.donghoonyoo.com",
  storage: sessionStorage,
});
