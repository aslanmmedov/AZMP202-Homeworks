import React, { useEffect, useState } from 'react'
import { AutoComplete, Table } from 'antd';
import controller from '../../../services/functions';
import { endpoints } from '../../../services/constants';
const AdminProducts = () => {

  const [products, setProducts] = useState([]);

  const getData = async() => {
    const data = await controller.getAllData(endpoints.products);
    setProducts(data)
  }

  useEffect(() => {
    getData();
  }, [])
  
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
      title:'Description',
      dataIndex: 'description',
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
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <>
      <div style = {{width:'1200px',margin:'50px auto',}}>
      <Table
    columns={columns}
    dataSource={products}
    onChange={onChange}
    showSorterTooltip={{
      target: 'sorter-icon',
    }}
  />
      </div>
    </>
  )
}

export default AdminProducts