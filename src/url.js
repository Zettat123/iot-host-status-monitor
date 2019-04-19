let url = ''
if (process.env.NODE_ENV === 'development') {
  url = 'http://dev.bz.com/api'
} else {
  url = '' // TODO: Fill with real url.
}

export default url
