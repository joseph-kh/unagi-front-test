import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, SectionContainer } from '../ui';
import { CreateCardForm } from './CreateCard.elements';
import { Card, Player } from '../../types';
import { loadingNotify, successNotify, errorNotify } from '../../utils/toast';
import { loadingMessage, successMessage } from '../../utils/constants';
import { useLoader } from '../../contexts/LoaderContext';
import { createCardHandler } from '../../lib/collection';
import { useSWRConfig } from 'swr';

interface CreateCardFormData extends Player {}
const CreateCard = () => {
  const router = useHistory();
  const { mutate } = useSWRConfig();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCardFormData>();

  const { isLoading, setIsLoading } = useLoader();

  const onCardSubmit = handleSubmit(async (playerData) => {
    setIsLoading(true);
    const loading = loadingNotify(loadingMessage.create);
    const newCard: Card = { player: playerData };
    try {
      await createCardHandler(newCard);
      await mutate('cards');
      successNotify(successMessage.create, loading);
      router.push(`/collection`);
    } catch (err) {
      errorNotify(err, loading);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <SectionContainer title="Create athletes' Ultimate Card">
      <CreateCardForm>
        <Controller
          control={control}
          rules={{ required: 'First Name is required' }}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="First Name"
              label="First Name *"
              value={value}
              onChange={onChange}
              errorMessage={errors.firstname?.message}
            />
          )}
          name="firstname"
        />
        <Controller
          control={control}
          rules={{ required: 'Last Name is required' }}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Last Name"
              label="Last Name *"
              value={value}
              onChange={onChange}
              errorMessage={errors.lastname?.message}
            />
          )}
          name="lastname"
        />
        <Controller
          control={control}
          rules={{ required: 'Date Of Birth is required' }}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="DOB"
              label="DOB *"
              type="date"
              value={value}
              onChange={onChange}
              errorMessage={errors.birthday?.message}
            />
          )}
          name="birthday"
        />

        <Button primary fontBig disabled={isLoading} onClick={onCardSubmit}>
          Create
        </Button>
      </CreateCardForm>
    </SectionContainer>
  );
};

export default CreateCard;
