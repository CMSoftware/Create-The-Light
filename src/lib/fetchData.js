export default function(url, stateName, callback) {
  return fetch(url).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return {
        error: 'A error with response',
      }
    }
  }).then(data => {
    if (data.error) {
      return new Error(data.err);
    } else {
      this.setState({
        [stateName]: data,
      })
      return data;
    }
  });
}