import instance from './auth';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  console.log('data addContact: ', data);
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
