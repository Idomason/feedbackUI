import PropTypes from 'prop-types'

function Header({ text }) {
  const headerStyles = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6150',
  }
  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1>Feedback UI</h1>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Hello Africa',
}

Header.prototype = {
  text: PropTypes.string,
}
export default Header
