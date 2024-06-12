import { Button, Input, SectionContainer } from '../ui';
import { CreateCardForm } from './CreateCard.elements';

const CreateCard = () => {
  return (
    <SectionContainer title="Create athletes' Ultimate Card">
      <CreateCardForm>
        <Input placeholder="First Name" label="First Name *" />
        <Input placeholder="Last Name" label="Last Name *" />
        <Input placeholder="DOB" label="DOB *" type="date" />
        <Button primary fontBig>
          Create
        </Button>
      </CreateCardForm>
    </SectionContainer>
  );
};

export default CreateCard;
