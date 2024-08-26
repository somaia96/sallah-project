
import BreadCrumb from '../components/Home/BreadCrumb'
import ContentContainer from '../components/products/ContentContainer'

const Products = () => {
  return (
    <div className='Products'>
      <div className='container flex flex-col'>
        <BreadCrumb />
        <ContentContainer />
      </div>
    </div>
  )
}

export default Products