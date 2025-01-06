import React from 'react'
import { useContext } from 'react'
import { BasketContext } from '../../../context/addbasketcontext'
import { AutoComplete, Button, Table } from 'antd';
import { Helmet } from 'react-helmet-async'
const Basket = () => {
    const {basket,addToBasket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket, calculateTotalPrice} = useContext(BasketContext)

    const columns = [
        {
          title: 'Name',
          dataIndex: 'title',
          showSorterTooltip: {
            target: 'full-header',
          },
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Submenu',
              value: 'Submenu',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.name.indexOf(value) === 0,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Price',
          dataIndex: 'price',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Category',
          dataIndex: 'category',
          filters: [
            {
              text: 'London',
              value: 'London',
            },
            {
              text: 'New York',
              value: 'New York',
            },
          ],
          onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        ,
        {
          title:'Quantity',
          dataIndex: 'quantity',
         
        }
      ];
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <>
    <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div>
      <div style = {{width:'1200px',margin:'50px auto',}}>
      <Table
    columns={columns}
    dataSource={basket}
    onChange={onChange}
    showSorterTooltip={{
      target: 'sorter-icon',
    }}
  />
      </div>
    </div>
    </>
    
  )
}

export default Basket
