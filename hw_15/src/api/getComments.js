export default function getComments(numberOfPage, numberOfComments, callback) {
  fetch(`https://dummyapi.io/data/v1/comment?page=${numberOfPage}&limit=${numberOfComments}`, {
    headers: {
      'app-id': '62cc77e4b1270c5505ba892b',
    },
  }).then((resp) => resp.json())
    .then((resp) => callback(resp.data, resp.page, resp.limit, resp.total));
}
