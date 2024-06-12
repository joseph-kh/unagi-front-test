import { SectionContainer, ErrorMessage } from '../components/ui';

const NotFoundPage = () => (
  <SectionContainer title="Error 404">
    <ErrorMessage fontSize={64}>Page Not Found 😟</ErrorMessage>
  </SectionContainer>
);

export default NotFoundPage;
