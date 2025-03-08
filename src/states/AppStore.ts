import { create } from 'zustand';
import storesData from '../assets/stores.json'
import { StoreData } from '../utilities/interfaces';

type State = {
  stores: StoreData[];
  skus: any[];
  planning: any[];
  calender: any[];
}

type Action = {
  reset: () => void
  setDefault: () => void
}

const initialState: State = {
    stores: [],
    skus: [],
    planning: [],
    calender: [],
}

const useAppStore = create<State & Action>((set, get) => ({
    ...initialState,
    reset: () => {
        set(initialState);
    },
    setDefault: () => {
        set({stores: storesData});
    }
}));

export default useAppStore;