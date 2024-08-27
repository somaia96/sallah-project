import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb"
import { Fragment, useEffect, useState } from "react"

const BreadCrumb = () => {
  let path = location.pathname
  const [paths, setPaths] = useState("")
  useEffect(() => {
    setPaths(path)
  }, [path])
  let pathNames: string[] = paths.split("/").filter((path: string) => path)

  return (
    <Breadcrumb className='BreadCrumb sm:py-[--spacing-2xl]' dir='rtl'>
      <BreadcrumbList>
        <BreadcrumbItem className="text-primary">
          <BreadcrumbLink href='/'>
            <BreadcrumbPage className="text-primary">الرئيسية</BreadcrumbPage>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 &&
          <BreadcrumbSeparator>
            <Slash className="text-primary" />
          </BreadcrumbSeparator>
        }
        {
          pathNames.map((path, i) => (
            <Fragment key={i}>
              {pathNames.length !== i + 1 ?
                <>
                  <BreadcrumbItem className="text-primary">
                    <BreadcrumbLink href={`/${path}`} className="text-primary">
                      {path}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash className="text-primary" />
                  </BreadcrumbSeparator>
                </>
                :
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-400">{path}</BreadcrumbPage>
                </BreadcrumbItem>
              }
            </Fragment>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb
