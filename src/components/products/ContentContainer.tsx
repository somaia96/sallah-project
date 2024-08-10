import { useState } from 'react'
import Products from './Products'
import Filter from '../categories/Filter'
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import GridSvg from '../../assets/SVG/GridSvg'
import ListSvg from '../../assets/SVG/ListSvg'
import FilterSvg from '../../assets/SVG/FilterSvg'
const ContentContainer = () => {
  const [grid, setGrid] = useState<number>(1)
  const toggleGrid = (toggle: number) => {
    setGrid(toggle)
  }

  return (
    <div className='ContentContainer py-[24px] sm:p-[40px] md:p-0 md:pb-[40px]'>
      <div className="flex justify-between gap-10">
        <div className='w-[100%]'>
          <div className="sort flex mb-5" dir='rtl'>
            <div className="icon items-center flex-1 gap-[--spacing-lg] flex">
              <div className="grid" onClick={() => toggleGrid(1)}>
                <GridSvg grid={grid}/>
              </div>
              <div className="list" onClick={() => toggleGrid(0)}>
                <ListSvg grid={grid}/>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className='md:hidden p-0'>
                    <FilterSvg/>
                  </Button>
                </SheetTrigger>
                <SheetContent className="p-0">
                  <SheetHeader>
                    <SheetTitle>
                      <h3 className="md:hidden md:m-0 px-[--spacing-xl] md:w-0 my-4" dir="rtl">فلترة المنتجات</h3>
                    </SheetTitle>
                    <SheetDescription>
                      <hr />
                    </SheetDescription>
                  </SheetHeader>
                  <Filter mobile={false} />
                </SheetContent>
              </Sheet>
            </div>
            <div className="select flex-1 flex gap-[--spacing-lg] justify-end">
              <h3>ترتيب حسب : </h3>
              <div>من الاقل للاعلى</div>
            </div>
          </div>
          <Products grid={grid} />
        </div>
        <Filter mobile={true} />
      </div>
    </div>
  )
}

export default ContentContainer
