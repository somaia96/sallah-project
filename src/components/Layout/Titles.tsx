import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
type closey = {
  closed: number,
  setClosed: any
}
const Titles = ({ closed, setClosed }: closey) => {
  function handleClick() {
    setClosed(1)
  }
  return (
    <div className={(closed ? "hidden" : "flex") + ' Titles sm:flex z-10 sm:[position:unset] absolute bg-opacity-90 sm:bg-opacity-100 h-[100vh] sm:h-[44px] sm:relative w-[100%] right-0 top-0 text-black bg-[#1D1F1F] sm:text-white'}>
      <div className="sm:container closed sm:[position:unset] overflow-hidden z-10 absolute sm: right-0 top-0 h-[100%] border bg-white sm:border-none flex-col w-[342px] sm:w-[100%] sm:bg-[#1D1F1F] sm:flex-row flex lg:gap-[24px] px-[--spacing-xl] sm:justify-center" dir="rtl">
        <h3 className="sm:hidden sm:m-0 sm:w-0 my-4" dir="rtl">جميع الاقسام</h3>
        <hr className="sm:hidden sm:w-0 sm:m-0 w-[120%] mx-[-20%]" />
        <div onClick={handleClick}>
          <i className=" fa-solid fa-close close sm:hidden"></i>
        </div>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:p-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 shadow-none border-none outline-0 bg-transparent sm:gap-[5px] sm:justify-center font-bold sm:px-0">
            <SelectValue placeholder="كل المنتجات" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

      </div>
    </div>
  )
}

export default Titles