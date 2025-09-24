
import Header from '../Header/Header'
// import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <div>
{/* < Header/> */}
<Header/>
{children}
</div>
  )
}
export default Layout