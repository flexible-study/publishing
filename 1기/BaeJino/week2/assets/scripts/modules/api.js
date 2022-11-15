export async function getPhotos() {
  const photos = JSON.parse(localStorage.getItem('__photos'))
  if (photos) return photos

  const res = await fetch('https://api.unsplash.com/photos/random?count=30', {
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID wgKhdtstUibcCkhkSt2ZES1whAr8ZO_ndoAN6ybeHNQ',
    },
  })
  const data = await res.json()
  localStorage.setItem('__photos', JSON.stringify(data))
  return data
}
