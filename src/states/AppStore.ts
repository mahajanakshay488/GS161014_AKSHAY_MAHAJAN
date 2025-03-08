import { create } from 'zustand';
import storesData from '../assets/stores.json';
import skusData from '../assets/skus.json';
import { SkusData, StoreData } from '../utilities/interfaces';

type State = {
  stores: StoreData[];
  skus: SkusData[];
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
        set({
          stores: storesData,
          skus: skusData
        });
    }
}));

export default useAppStore;