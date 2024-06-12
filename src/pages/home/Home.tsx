import InfoSection from '../../components/info-section/InfoSection';
import {
  homeSectionOne,
  homeSectionTree,
  homeSectionTwo,
} from '../../utils/data/sections';

const Home = () => {
  return (
    <>
      <InfoSection {...homeSectionOne} />
      <InfoSection {...homeSectionTwo} />
      <InfoSection {...homeSectionTree} />
    </>
  );
};

export default Home;
