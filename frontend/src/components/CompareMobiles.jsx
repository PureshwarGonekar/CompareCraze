import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import {
  MDBContainer,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const CompareMobiles = ({ CompareData }) => {
  console.log("compareeeee",CompareData)
 return (
  <div>

  {CompareData.length >0  && (
    <MDBContainer className="py-5">
      <MDBTable
        responsive
        striped
        className=" text-successtable-border border-light"
      >
        <MDBTableHead className="border-light">
          <tr>
            <th scope="col"></th>
            {CompareData.map((data)=>(
                <th scope="col"> 
                    <img
                        src={data.imageUrl}
                        alt={`${data.brand} ${data.model}`}
                        className="mx-auto h-40"
                    />
                    <h5 className='my-2 text-center'>{data.brand + data.model}</h5>
                </th>
            ))}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row" className=' text-lg'>Price </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.price}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Release date </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.release_date}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Launched In India Date </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.launched_in_india}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Form Factor </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.form_factor}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Body Type </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.body_type}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Dimensions </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.dimensions}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Weight </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.weight}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>IP Rating </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.ip_rating}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Battery Capacity (mAh) </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.battery_capacity_mah}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Removable Battery </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.removable_battery}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Fast Charging </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.fast_charging}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Wireless Charging </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.wireless_charging}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Colors </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data?.colors?.join(', ')}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Display Refresh Rate </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.display.refresh_rate}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Display Resolution Standard </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.display.resolution_standard}</p>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className=' text-lg'>Screen Size </th>
            {CompareData.map((data)=>(
              <td>
                <p className='text-center'>{data.display.screen_size}</p>
              </td>
            ))}
          </tr>
          {/* Add more rows for other specifications */}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>

  )}
  </div>
 )
};

export default CompareMobiles;
