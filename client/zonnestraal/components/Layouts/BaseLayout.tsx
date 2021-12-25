import { Header, Nav } from '.';

interface BaseProps {
  children: any
}

const BaseLayout = ({ children }: BaseProps) => {

  return (
    <>
      <div>
          <Header />
          { children }
      </div>
    </>
  );
};
  
export default BaseLayout;