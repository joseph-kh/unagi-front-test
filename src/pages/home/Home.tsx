import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import InfoSection from '../../components/info-section/InfoSection';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Home;
