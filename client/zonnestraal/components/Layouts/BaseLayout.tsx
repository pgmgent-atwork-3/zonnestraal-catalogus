import { Nav } from './Nav';

interface BaseProps {
  children: any
}

const BaseLayout = ({ children }: BaseProps) => {

  return (
    <>
      <Nav/>

      <div>
          { children }
      </div>
    </>
  );
};
  
export default BaseLayout;