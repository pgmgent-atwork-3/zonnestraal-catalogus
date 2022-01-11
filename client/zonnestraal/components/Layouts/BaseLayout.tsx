import { Footer, Header, Nav } from '.';

interface BaseProps {
  children: any
}

const BaseLayout = ({ children }: BaseProps) => {

  return (
    <>
      <div>
          <Header />
          { children }
          <Footer/>
      </div>
    </>
  );
};
  
export default BaseLayout;