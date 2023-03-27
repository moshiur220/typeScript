/*
interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function getUsers(): Promise<void> {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
*/

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    const data: T = await response.json();
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
