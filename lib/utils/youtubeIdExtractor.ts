export default function extractYouTubeID(url: string) {
  console.log('url', url)
  // Regular expression to find the YouTube video ID
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)

  console.log('match', match)

  // Check if we found a match
  if (match && match[7].length == 11) {
    return match[7]
  } else {
    // Return an error message or undefined if no ID found
    console.error('Could not extract YouTube ID.')
    return undefined
  }
}
