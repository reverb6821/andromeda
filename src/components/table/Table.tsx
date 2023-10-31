import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '../ui/Grid';

const Table =()=>{
    const { t } = useTranslation();

    const heading=['Product', 'Color', 'Category', 'Price' ]
    const product = [
        // {
        //     product: 'Apple MacBook Pro 17"',
        //     color: 'Silver',
        //     category: 'Laptop',
        //     price: '$2999'
        // },
        // {
        //     product: 'Microsoft Surface Pro',
        //     color: 'White',
        //     category: 'Laptop',
        //     price: '$1999'
        // },
        // {
        //     product: 'Magic Mouse 2',
        //     color: 'Black',
        //     category: 'Accessories',
        //     price: '$99'
        // },
    ]
    return(
        <React.Fragment>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {heading && heading.length > 1 ? 
                                heading.map(el => (
                                    <th scope="col" className="px-6 py-3">
                                    {el}
                                    </th>
                                ))
                            : (
                                ''
                            )}
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {product && product.length > 1 ? (
                            product.map((el,index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {el.product}
                                    </th>
                                    <td className="px-6 py-4">
                                        {el.color}
                                    </td>
                                    <td className="px-6 py-4">
                                        {el.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {el.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))) : (
                                <React.Fragment>
                                    <Grid direction='row' classNames='flex items-center justify-center m-auto p-5'>
                                        <h6 className="text-lg font-bold text-color w-full ">
                                        {t("t.app.table.noOptions")}
                                        </h6>
                                    </Grid>
                                </React.Fragment>
                            )}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default Table