import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

let useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (username) => set(() => ({ user: username })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
 