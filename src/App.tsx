import { useEffect } from 'react';
import './App.css';
import Header from './components/utils/Header';
import Main from './components/utils/Main';
import Sidenav from './components/utils/Sidenav';
import useAppStore from './states/AppStore';
import calenderData from './assets/calender.json';
import { getCalculations } from './utilities/helpers';

function App() {

  const { stores, skus, planning, setCalculations,setDefault, reset } = useAppStore();

  // setting the default data to state and reset it.
  useEffect(() => {
    setDefault();
    return () => {
      reset();
    }
  }, []);

  useEffect(() => {
    if (stores.length > 0 && skus.length > 0 && planning.length > 0 && calenderData.length > 0) {

      const calculationsData = getCalculations(planning, stores,  skus);
      setCalculations(calculationsData);

    }
  }, [stores, skus, planning, calenderData]);

  return (
    <div className='w-screen h-screen'>

      <Header />

      <div className='w-full h-[calc(100%-70px)] bg-gray-200 flex' >

        <Sidenav />
        <Main />

      </div>

    </div>
  );
}

export default App;
