import axios from "axios";

axios.defaults.baseURL = 'https://636101be67d3b7a0a6bb12e7.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts')
    console.log(data);
    return data;
}

export async function removeContact(id) {
    const { data } = await axios.delete(`/contacts/:${id}`)
    console.log(data);
    return data;
}