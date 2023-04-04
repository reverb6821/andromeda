import React from 'react'
import { Line } from 'react-chartjs-2'

const labels = ['January', 'February', 'March', 'April', 'May', 'June']

const data = {
  labels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }
  ]
}

const LineChart = () => {
  return (

    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8 flex-shrink max-w-screen drop-shadow-xl w-screen lg:w-2/3 xl:w-3/4">
            <div className="mb-4 flex items-center justify-between">
                <div className="shrink-0">
                    <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
                        45,385
                    </span>
                    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                        Order this Week
                    </h3>
                </div>
            </div>
       <Line data={data} />
       </div>

  )
}

export default LineChart
