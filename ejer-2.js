//la funcion recibe los URL como parametro
function downloadContents(urls) {
    const promises = urls.map(url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    });

    return Promise.all(promises);
}

// Ejemplo de uso:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

downloadContents(urls)
        .then(contents => {
        console.log('Downloaded contents:', contents);
    })
   
    .catch(error => {
        console.log('Error:', error.message);
    });
  