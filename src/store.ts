import create from "zustand";
import {
  persist,
  devtools,
} from "zustand/middleware";

type User = {
  login: string;
  name: string;
  email?: string;
  avatarUrl?: string;
  url: string;
};
type GqlErr = {
  message: string;
  documentation_url: string;
  status: number;
  headers: {
    map: any;
  };
};
type MainUser = {
  user: User | null;
  error: GqlErr | null;
};
interface LocalState {
  localValues: {
    token?: string | null;
    theme: string | null;
    mainUser?: MainUser;
  };
  updateTheme: (theme: string) => void;
  updateToken: (token: string | null) => void;
  updateMainUser: ({
    user,
    error,
  }: MainUser) => void;
}

export const useLocalStoreValues =
  create<LocalState>()(
    devtools(
      persist(
        (set, get) => ({
          localValues: get()?.localValues ?? {
            theme: null,
            token: null,
            mainUser: null,
          },
          updateTheme: (theme) =>
            set((state) => ({
              localValues: {
                ...state?.localValues,
                theme,
              },
            })),
          updateToken: (token) =>
            set((state) => ({
              localValues: {
                ...state?.localValues,
                token,
              },
            })),
          updateMainUser: (user) =>
            set((state) => ({
              localValues: {
                ...state?.localValues,
                mainUser: user,
              },
            })),
        }),

        {
          name: "test-bed-storage",
          getStorage: () => localStorage,
        }
      )
    )
  );
