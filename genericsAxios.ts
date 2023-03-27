import axios, { AxiosResponse } from "axios";
/*
interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  try {
    const response: AxiosResponse<User[]> = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users: User[] = response.data;
    return users;
  } catch (error) {
    throw new Error(error);
  }
}

async function getUsers(): Promise<void> {
  try {
    const users: User[] = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

getUsers();

*/
// use generics  example here

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    const data: T = response.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function getUsers(): Promise<void> {
  try {
    const users: User[] = await fetchData<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
