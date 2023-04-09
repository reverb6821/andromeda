import React from 'react'
import { FcPaid, FcCurrencyExchange, FcBullish, FcLineChart } from 'react-icons/fc'

const Stats = () => {
  return (
    <>
      <div className="flex-shrink max-w-full px-3 md:px-4 w-full lg:w-full mb-6 drop-shadow-xl">
        <div className="p-4 sm:p-6 bg-slate-200 hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group h-full">
          <div className="relative">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans font-semibold leading-normal text-sm dark:text-slate-800 dark:hover:text-black-700">Today's Money</p>
                  <h5 className="mb-0 font-bold dark:text-slate-800 dark:hover:text-black-700">
                    $53,000
                    <span className="leading-normal text-sm font-weight-bolder text-lime-500 dark:text-slate-800 dark:hover:text-black-700">+55%</span>
                  </h5>
                </div>
              </div>
              <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                <FcCurrencyExchange size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink max-w-full px-3 md:px-4 w-full lg:w-full mb-6 drop-shadow-xl">
        <div className="p-4 sm:p-6 bg-slate-200 hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group h-full">
          <div className="relative">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans font-semibold leading-normal text-sm dark:text-slate-800 dark:hover:text-black-700">Today's order</p>
                  <h5 className="mb-0 font-bold dark:text-slate-800 dark:hover:text-black-700">
                    244
                    <span className="leading-normal text-sm font-weight-bolder text-lime-500 dark:text-slate-800 dark:hover:text-black-700">+55%</span>
                  </h5>
                </div>
              </div>
              <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                <FcBullish size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink max-w-full px-3 md:px-4 w-full lg:w-full mb-6 drop-shadow-xl">
        <div className="p-4 sm:p-6 bg-slate-200 hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group h-full">
          <div className="relative">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans font-semibold leading-normal text-sm dark:text-slate-800 dark:hover:text-black-700">This Month Order</p>
                  <h5 className="mb-0 font-bold dark:text-slate-800 dark:hover:text-black-700">
                    1278
                    <span className="leading-normal text-sm font-weight-bolder text-lime-500 dark:text-slate-800 dark:hover:text-black-700">+45%</span>
                  </h5>
                </div>
              </div>
              <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                <FcLineChart size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink max-w-full px-3 md:px-4 w-full lg:w-full mb-6 drop-shadow-xl">
        <div className="p-4 sm:p-6 bg-slate-200 hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group h-full">
          <div className="relative">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans font-semibold leading-normal text-sm dark:text-slate-800 dark:hover:text-black-700">This Year Order</p>
                  <h5 className="mb-0 font-bold dark:text-slate-800 dark:hover:text-black-700">
                    800
                    <span className="leading-normal text-sm font-weight-bolder text-red-500 dark:text-slate-800 dark:hover:text-black-700">-25%</span>
                  </h5>
                </div>
              </div>
              <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                <FcPaid size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink max-w-full px-3 md:px-4 w-full lg:w-full mb-6 drop-shadow-xl">
        <div className="p-4 sm:p-6 bg-slate-200 hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group h-full">
          <div className="relative">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans font-semibold leading-normal text-sm dark:text-slate-800 dark:hover:text-black-700">This Year Order</p>
                  <h5 className="mb-0 font-bold dark:text-slate-800 dark:hover:text-black-700">
                    800
                    <span className="leading-normal text-sm font-weight-bolder text-red-500 dark:text-slate-800 dark:hover:text-black-700">-25%</span>
                  </h5>
                </div>
              </div>
              <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                <FcPaid size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Stats
