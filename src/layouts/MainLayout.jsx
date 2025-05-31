import HeaderComponent from './Header';
import FooterComponent from './Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <HeaderComponent />
        <div className='flex-grow px-32'>{children}</div>
        <FooterComponent />
      </div>
    </>
  );
}
