import TopHeader from './TopHeader'
import Navbar from './Navbar'
import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"

const Header = () => {
  return (
    <div className='Header'>
      <TopHeader />
      <Navbar />
      <div className='BreadCrumb sm:p-[--spacing-xl]' dir='rtl'>
        <div className="container">

          <Breadcrumb>
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
        </div>
      </div>
    </div>
  )
}

export default Header
