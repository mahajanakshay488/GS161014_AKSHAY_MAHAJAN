import { create } from 'zustand';
import storesData from '../assets/stores.json';
import skusData from '../assets/skus.json';
import planningData from '../assets/planning.json';
import { SkusData, StoreData } from '../utilities/interfaces';

type State = {
  stores: StoreData[];
  skus: SkusData[];
  planning: any[];
  calender: any[];
  calculations: any[];
}

type Action = {
  reset: () => void;
  setDefault: () => void;
  setCalculations: (data: any) => void;
}

const initialState: State = {
    stores: [],
    skus: [],
    planning: [],
    calender: [],
    calculations: [],
}

const useAppStore = create<State & Action>((set, get) => ({
    ...initialState,
    reset: () => {
        set(initialState);
    },
    setDefault: () => {
        set({
          stores: storesData,
          skus: skusData,
          planning: planningData
        });
    },
    setCalculations: (data:any) => {
      set({calculations: data});
    }
}));

export default useAppStore;