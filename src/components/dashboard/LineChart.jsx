import React from 'react'
import Chart from 'react-apexcharts'

const LineChart = () => {
  const borderColor = '#374151'
  const labelColor = '#6B7280'
  const opacityFrom = 0
  const opacityTo = 1

  const options = {
    stroke: {
      curve: 'smooth'
    },
    chart: {
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      foreColor: labelColor,
      toolbar: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom,
        opacityTo,
        type: 'vertical'
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      style: {
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif'
      }
    },
    grid: {
      show: true,
      borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15
      }
    },
    markers: {
      size: 5,
      strokeColors: '#ffffff',
      hover: {
        size: undefined,
        sizeOffset: 3
      }
    },
    xaxis: {
      categories: [
        '01 Feb',
        '02 Feb',
        '03 Feb',
        '04 Feb',
        '05 Feb',
        '06 Feb',
        '07 Feb'
      ],
      labels: {
        style: {
          colors: [labelColor],
          fontSize: '14px',
          fontWeight: 500
        }
      },
      axisBorder: {
        color: borderColor
      },
      axisTicks: {
        color: borderColor
      },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
          color: borderColor,
          width: 1,
          dashArray: 10
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [labelColor],
          fontSize: '14px',
          fontWeight: 500
        },
        formatter: function (value) {
          return '$' + value
        }
      }
    },
    legend: {
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: 'Inter, sans-serif',
      labels: {
        colors: [labelColor]
      },
      itemMargin: {
        horizontal: 10
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false
            }
          }
        }
      }
    ]
  }
  const series = [
    {
      name: 'Revenue',
      data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
      color: '#1A56DB'
    }
  ]

  return (

    <div className="rounded-lg bg-white p-4 dark:bg-gray-800 sm:p-6 xl:p-8 flex-shrink max-w-screen drop-shadow-xl w-screen lg:w-2/3 xl:w-3/4 shadow-lg">
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
            <Chart height={420} options={options} series={series} type="area" />
       </div>

  )
}

export default LineChart
