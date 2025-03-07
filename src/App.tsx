import './App.css';
import Header from './components/utils/Header';
import Main from './components/utils/Main';
import Sidenav from './components/utils/Sidenav';

function App() {
  return (
    <div className='w-screen h-screen bg-slate-100'>

      <Header />

      <div className='w-full h-[calc(100%-70px)] bg-slate-200 flex' >

        <Sidenav />
        <Main />

      </div>

    </div>
  );
}

export default App;
