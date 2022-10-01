import create from "zustand";
import {
  persist,
  devtools,
} from "zustand/middleware";

interface LocalState {
  localValues: {
    token?: string | null;
    theme: string | null;
  };
  updateTheme: (theme:string) => void;
  updateToken: (token:string|null) => void;
}

export const useLocalStoreValues =
  create<LocalState>()(
    devtools(
      persist(
        (set, get) => ({
          localValues: get()?.localValues ?? {
            theme: null,
            token: null,
          },
          updateTheme: (theme) =>
            set((state) => ({
              localValues: {
                ...state?.localValues,
                theme,
              },
            })
            ),
          updateToken: (token) =>
            set((state) => ({
              localValues: {
                ...state?.localValues,
                token,
              },
            })),
        }),

        {
          name: "test-values-storage",
          getStorage: () => localStorage,
        }
      )
    )
  );
