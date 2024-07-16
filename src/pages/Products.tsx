import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"

import ContentContainer from '../components/ContentContainer'
const Products = () => {
  return (
    <div className='Products'>
        {/* <div className='BreadCrumb sm:p-[--spacing-xl]' dir='rtl'>

      </div> */}
    <div className='container flex flex-col'>
      
    <Breadcrumb className='BreadCrumb sm:py-[--spacing-2xl]' dir='rtl'>
            <BreadcrumbList>
              <BreadcrumbItem className="text-[--primary]">
                <BreadcrumbLink href='/'>
                  <BreadcrumbPage className="text-gray-400">الرئيسية</BreadcrumbPage>

                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="text-[--primary]" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-400">كل المنتجات</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      <ContentContainer/>
      </div>
    </div>
  )
}

export default Products