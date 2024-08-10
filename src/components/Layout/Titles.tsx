import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const Titles = () => {
  let items = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]
  return (
    <div className="hidden Titles sm:flex z-10 sm:[position:unset] absolute bg-opacity-90 sm:bg-opacity-100 h-[100vh] sm:h-[44px] sm:relative w-[100%] right-0 top-0 text-black bg-[#1D1F1F] sm:text-white">
      <div className="sm:container closed sm:[position:unset] overflow-hidden z-10 absolute sm: right-0 top-0 h-[100%] border bg-white sm:border-none flex-col w-[342px] sm:w-[100%] sm:bg-[#1D1F1F] sm:flex-row flex lg:gap-[24px] px-[--spacing-xl] sm:justify-center" dir="rtl">
        {Array.from({ length: 10 }).map((_, i) => (
          <Select key={i} dir="rtl">
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:p-0">
              <SelectValue placeholder="كل المنتجات" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                {items.map((item, index) => (
                  <SelectItem key={index} value={item}>{item}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </div>
    </div>
  )
}

export default Titles