import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getDetails } from '../controllers/backendRoutes';

import mobilePhonesData from '../Data/mobilePhonesData.json';
import laptopsData from '../Data/laptopsData.json';
import tvData from '../Data/tvData.json';
import tabletsData from '../Data/tabletsData.json';
import smartWatchesData from '../Data/smartWatchesData.json';
import headphonesData from '../Data/headphonesData.json';
import cameraData from '../Data/cameraData.json';
import gamingConsolesData from '../Data/gamingConsolesData.json';

import Button from '@mui/material/Button';
import CompareMobiles from "../components/CompareMobiles";
import CompareLaptops from "../components/CompareLaptops";
import CompareGeneric from "../components/CompareGeneric";
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const options = [mobilePhonesData, laptopsData, tvData, tabletsData, smartWatchesData, headphonesData, cameraData, gamingConsolesData ]

const MainPage = () => {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();
    const [wishList, setWishList] = useState([]);

  // Check if user is authenticated
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuth(true);
        // console.log("if token")
      } else {
        setIsAuth(false);
        console.log("Can't access login first");
        navigate("/login");
      }
    },[]);
    const [value, setValue] = useState(0);
    const [compare, setCompare]= useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSelectedOptions([null, null, null, null]);
        setCompare(false);
    };

    // console.log("value",value)
    const [selectedOptions, setSelectedOptions] = useState([null, null, null, null]);
    // console.log("selectedOptions",selectedOptions)

    // console.log("options have here",options);

    const tabs= ["Mobiles","Laptops", "TV", "Tablets", "Smart Watches", "Headphones", "Cameras", "Gamming Consoles","Smart Bands" ]

  const handleAutocompleteChange = (event, newValue, index) => {
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[index] = newValue;
      setSelectedOptions(updatedSelectedOptions);
  };

  useEffect(()=>{
    setSelectedOptions([null, null, null, null]);
    setCompare(false);
  },[value])

  const addToWishlist = (data)=>{
    const wishListData = localStorage.getItem('wishList');
    let parsedWishList=JSON.parse(wishListData||"[]");
    const ids = data.map(item => item.id);
    console.log("addToWishlist",data)
    let wishItem = {
      cat: value,
      items: ids
    }

    let newWishList = parsedWishList.filter(obj => {
        return JSON.stringify(obj) === JSON.stringify(wishItem);
    });
    if(newWishList.length > 0 ){
      console.log("newWishList",newWishList)
          toast.error("Already Added in wishlist", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        return;
    }

    parsedWishList= [...parsedWishList, wishItem];
    localStorage.setItem('wishList', JSON.stringify(parsedWishList));
    toast.success("Added to wishlist Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
  }


  return (
    <>
      <Navbar />
      <ToastContainer/>

      <div className="p-10 flex flex-col justify-center items-center ">
        {/* <h1>Main Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis accusantium, nulla laboriosam quidem nam! Libero iure ad voluptate sed, itaque adipisci fugiat molestias. Nemo temporibus beatae ad facere nisi.</p> */}

        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/phone.png')} /> label="Mobiles" />
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/laptop.png')} />   label="Laptops" />
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/tv.png')} />   label="TV" />
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/tablet.png')} />   label="Tablets" />
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/smartwatch.png')} />   label="Smart Watches" />
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/headphone.png')} />   label="Headphones" />
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/camera.png')} />   label="Cameras" />
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/gammingconsole.png')} />   label="Gamming Consoles" />
            <Tab icon = <img className=" w-10 m-4" src={require('../assets/images/smartband.png')} />   label="Smart Bands" />
        </Tabs>

        <div className="grid grid-cols-2 gap-x-40 gap-y-10 p-8">
            {selectedOptions && selectedOptions.map((_, index) => (
                <Autocomplete
                  key={index}
                  id={`country-select-demo-${index}`}
                  sx={{ width: 300 }}
                  options={options[value]}
                  autoHighlight
                  getOptionLabel={(option) => option.brand.concat(" ", option.model?option.model:"", "", option.series?option.series:"")}
                  onChange={(event, newValue) => handleAutocompleteChange(event, newValue, index)}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                      <img
                        loading="lazy"
                        width="20"
                        src={option.imageUrl}
                        alt=""
                      />
                      {option.brand.concat(" ", option.model?option.model:"", "", option.series?option.series:"")}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={`Enter the name of ${tabs[value]}`}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
            ))}
        </div>
        
        <div>
          <Button variant="contained" onClick={()=>setCompare(true)}>Compare</Button>
        </div>

        <div className="flex">

          {compare && selectedOptions.length >0 &&

          <div>
            {compare && value==0 && 
              <CompareGeneric CompareData={selectedOptions.filter((option) => option !== null)} />
            }
            {compare && value==1 && 
              <CompareLaptops CompareData={selectedOptions.filter((option) => option !== null)} />
            }
            {compare && value>=2 && 
              <CompareGeneric CompareData={selectedOptions.filter((option) => option !== null)} />
            }

          </div>
          
          }
          {compare && selectedOptions.length >0 && (
            <FavoriteIcon
                className={`cursor-pointer text-red-500  m-2 hover:scale-125`}
                fontSize="large"
                onClick={()=>addToWishlist(selectedOptions.filter((option) => option !== null) )}
                
            />
          )}
        </div>

      </div>

      <Footer/>

    </>
  )
}

export default MainPage;
