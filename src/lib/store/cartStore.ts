import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
    id: string;
    slug: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (slug: string) => void;
    updateQty: (slug: string, delta: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item) => set((state) => {
                const existing = state.items.find((i) => i.slug === item.slug);
                if (existing) {
                    return { items: state.items.map((i) => i.slug === item.slug ? { ...i, quantity: i.quantity + 1 } : i) };
                }
                return { items: [...state.items, { ...item, quantity: 1 }] };
            }),
            removeItem: (slug) => set((state) => ({ items: state.items.filter((i) => i.slug !== slug) })),
            updateQty: (slug, delta) => set((state) => ({
                items: state.items.map((i) => i.slug === slug ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i)
            })),
            clearCart: () => set({ items: [] }),
            getTotalPrice: () => get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),
            getTotalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
        }),
        { name: 'energymax-storage' }
    )
);