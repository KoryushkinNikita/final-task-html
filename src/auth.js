
/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */



curl --request GET \
  --url 'https://api.spotify.com/v1/search?type=album&include_external=audio' \
  --header 'Authorization: ' \
  --header 'Content-Type: application/json'
