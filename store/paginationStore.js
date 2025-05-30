import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePaginationStore = create(
  persist(
    (set) => ({
      currentPage: 1,
      blogsPerPage: 6,
      searchTerm:"",
      selectedCategory:"",

      setSearchTerm: (term) => set({ searchTerm: term }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setCurrentPage: (page) => set({ currentPage: page }),
    }),
    {
      name: 'pagination-storage',
      getStorage: () =>
        typeof window !== 'undefined' ? localStorage : undefined,
    }
  )
);
