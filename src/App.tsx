import { useEffect } from 'react';
import './App.css';
import Header from './components/utils/Header';
import Main from './components/utils/Main';
import Sidenav from './components/utils/Sidenav';
import useAppStore from './states/AppStore';

function App() {

  const { setDefault, reset } = useAppStore();

  useEffect(()=>{
    setDefault();
    return () =>{
      reset();
    }
  },[]);

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
