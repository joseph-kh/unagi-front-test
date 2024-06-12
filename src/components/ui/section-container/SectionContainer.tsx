import { SectionWrap, SectionTitle } from './SectionContainer.elements';

interface Props {
  title?: string;
  children: React.ReactNode;
}
const SectionContainer = ({ title, children }: Props) => {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
};

export default SectionContainer;
