import GsynergyLogo from '../../Gsynergy_Logo_V2_Long_Description.svg';

export default function Header() {
  return (
    <header className='w-full h-[70px] py-1 px-3 bg-white drop-shadow-md flex justify-between items-center'>

      <img
        src={GsynergyLogo}
        alt="logo img"
        className='h-full'
      />

      <h1 className='text-3xl font-semibold'>Data Viewer App</h1>

      <div></div>

    </header>
  )
}
