import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../../context/userContext';
import toast from 'react-hot-toast';

const userSearchSchema = z.object({
  userName: z.string().min(1, { message: 'Campo de pesquisa vazio.' }),
});

type searchUserInputs = z.infer<typeof userSearchSchema>;

export function SearchUser() {
  const { fetchUserData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<searchUserInputs>({
    resolver: zodResolver(userSearchSchema),
  });

  function handleUserSearch(data: searchUserInputs) {
    fetchUserData(data);
    reset();
  }

  useEffect(() => {
    if (errors.userName) {
      toast.error(errors.userName.message || 'Campo de pesquisa vazio');
    }
  }, [errors.userName]);

  return (
    <>
      <form
        onSubmit={handleSubmit(handleUserSearch)}
        className='-mt-10 flex w-full max-w-[54rem] gap-2'
      >
        <input
          className='w-full rounded-md border border-solid border-base-border bg-base-input px-4 py-3'
          type='text'
          placeholder='Busque por um usuário'
          {...register('userName')}
        />

        <button
          disabled={isSubmitting}
          type='submit'
          className='cursor-pointer rounded-md bg-base-input px-4 py-3 duration-300 hover:bg-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-10'
        >
          Buscar
        </button>
      </form>
    </>
  );
}
