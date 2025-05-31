import Link from 'next/link';

const HeaderComponent = () => {
  return (
    <>
      <header className='sticky top-0 flex items-center justify-between w-screen px-32 py-4 bg-white border-b-2'>
        <div className='bg-logo bg-cover h-[64px] aspect-[16/9]'></div>
        <nav className='flex gap-12 text-xl'>
          <Link href={'/about'}>About</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/location'}>Location</Link>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
