import { Slash } from "lucide-react"
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb"
 
const BreadCrumb = () => {
  return (
    <div className='BreadCrumb sm:px-[16px]' dir='rtl'>
          <div className="container">

        <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="text-[#62D0B6]">
          <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className="text-[#62D0B6]" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage  className="text-gray-400">كل المنتجات</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    </div>
    </div>
  )
}

export default BreadCrumb
