import { Nav } from './Nav';
import {Header} from './Header';

interface BaseProps {
  children: any
}

const BaseLayout = ({ children }: BaseProps) => {

  return (
    <>
      <Nav/>

      <div>
          <Header />
          { children }
      </div>
    </>
  );
};
  
export default BaseLayout;