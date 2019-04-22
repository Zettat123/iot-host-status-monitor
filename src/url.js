let url = ''
if (process.env.NODE_ENV === 'development') {
  url = 'http://dev.bz.com/api'
  require('../mock/index')
} else {
  url = 'http://bz302.com' // TODO: Fill with real url.
}

export default url
