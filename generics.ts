// Generic function example
/*
function printNumber(n: number[]): void {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
  }
}

function printString(str: string[]): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

printNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

printString(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]);
*/
function printAnyThings<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnyThings([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

printAnyThings(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]);

interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// (async () => {
//     // const posts = await fetchPostData('/posts');
//     const posts = await fetchData<IPost[]>('/posts');
//     posts[0].
// })();
