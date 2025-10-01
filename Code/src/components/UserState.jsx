import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
  status: 1,
  email: null,
  username: null,
  jwtToken: null,
  // likedGames: [], // This line has been removed
  ratedGames: {},
};

// Define your backend URL
const BACKEND_URL = "https://gdesbackend.vercel.app";

export const useUserState = create(
  persist(
    (set, get) => ({
      userValue: initialState,
      
      setUserValue: (newValue) => set(state => ({ userValue: { ...state.userValue, ...newValue } })),
      
      logout: () => set({ userValue: initialState }),

      // --- The toggleLikeGame function has been removed ---

      // --- UPDATED: Function for Rating Games ---
      rateGame: async (gameId, rating) => {
        const { userValue } = get();
        const { ratedGames, jwtToken } = userValue;

        if (!jwtToken) return;

        const oldRatings = { ...ratedGames }; // Keep a copy in case of error
        const newRatings = { ...ratedGames, [gameId]: rating };

        // 1. Optimistic Update
        set(state => ({
          userValue: { ...state.userValue, ratedGames: newRatings }
        }));

        // 2. Sync with Backend
        try {
          const data = await fetch(`${BACKEND_URL}/api/user/rate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ gameId, rating })
        });
            const retur = await data.json();
            console.log("Rating sync response:", retur);
        } catch (error) {
          console.error("Failed to sync rating:", error);
          // Optional: Revert the change
          set(state => ({
            userValue: { ...state.userValue, ratedGames: oldRatings }
          }));
        }
      }
    }),
    {
      name: 'user-login-status',
    }
  )
);

