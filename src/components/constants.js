
export const LOGO = 'https://imgs.search.brave.com/58xq76kBx0bPsgZKamGSryxiqdxKGUPI5WkUGsMLbsE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvTmV0ZmxpeC1M/b2dvLTcwMHgzOTQu/cG5n'

export const USER_PROFILE = "https://avatars.githubusercontent.com/u/100994684?v=4"

export const API_OPTION =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w200/'

export const LOGIN_IMG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg'

export const languageConstant = [
  {identifier: 'en', langkey: 'English'},
  {identifier: 'hindi', langkey: 'Hindi'},
  {identifier: 'spanish', langkey: 'Spanish'},
]
  
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY