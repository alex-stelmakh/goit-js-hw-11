export function fetchParams(item) {
  const API_KEY = '44848974-7ecdee37a41921c1b33ea19fc';

  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}


