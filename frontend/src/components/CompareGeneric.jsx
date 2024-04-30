import React from 'react';
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const formatKey = (key) => {
    // Replace underscores with spaces and capitalize each word
    return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

const CompareGeneric = ({ CompareData }) => {

    console.log("cCompareGeneric",CompareData)

    const keys = Object.keys(CompareData[0]).filter(key => key !== 'imageUrl' &&  key !== 'id');
    
    const isObject = (value) => {
      return typeof value === 'object' && value !== null && !Array.isArray(value);
    };
    
    return (
        <div>
            {CompareData.length > 0 && (
                <MDBContainer className="py-5">
                    <MDBTable
                        responsive
                        striped
                        className="text-successtable-border border-light"
                    >
                        <MDBTableHead className="border-light">
                            <tr>
                                <th scope="col"></th>
                                {CompareData.map((item, index) => (
                                    <th key={index} scope="col">
                                        <img
                                            src={item.imageUrl}
                                            alt={`${item.brand} ${item?.modal}`}
                                            className="mx-auto h-40"
                                        />
                                        <h5 className='my-2 text-center font-bold'>{`${item.brand} ${item.model}`}</h5>
                                    </th>
                                ))}
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {/* Mapping through each item data field to display */}
                            {keys.map((key, index) => (
                                <tr key={index}>
                                    <th scope="row" className='text-lg font-bold'>{formatKey(key)}</th>
                                    {CompareData.map((item, idx) => (
                                        <td key={idx} className='text-center'>
                                            {/* Checking if the current field is an object, if so, display nested table */}
                                            {isObject(item[key]) ? (
                                                <MDBTable>
                                                    <MDBTableBody>
                                                        {Object.keys(item[key]).map((nestedKey, i) => (
                                                            <tr key={i}>
                                                                <td className='font-bold'>{formatKey(nestedKey)}</td>
                                                                {/* Render the nested object's values */}
                                                                <td>
                                                                    {isObject(item[key][nestedKey]) ? (
                                                                        // Render nested object as an array of strings
                                                                        Object.entries(item[key][nestedKey]).map(([subKey, subValue]) => (
                                                                            <p key={subKey}>{formatKey(subKey)}: {subValue}</p>
                                                                        ))
                                                                    ) : (
                                                                        // Render non-object values directly
                                                                        item[key][nestedKey]
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </MDBTableBody>
                                                </MDBTable>
                                            ) : (
                                                <p>{item[key]}</p>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                </MDBContainer>
            )}
        </div>
    );
};

export default CompareGeneric;
