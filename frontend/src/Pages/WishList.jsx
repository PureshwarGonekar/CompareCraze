import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import vs from "../../src/assets/images/vs.png"

import mobilePhonesData from '../Data/mobilePhonesData.json';
import laptopsData from '../Data/laptopsData.json';
import tvData from '../Data/tvData.json';
import tabletsData from '../Data/tabletsData.json';
import smartWatchesData from '../Data/smartWatchesData.json';
import headphonesData from '../Data/headphonesData.json';
import cameraData from '../Data/cameraData.json';
import gamingConsolesData from '../Data/gamingConsolesData.json';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CompareGeneric from "../components/CompareGeneric";

const options = [mobilePhonesData, laptopsData, tvData, tabletsData, smartWatchesData, headphonesData, cameraData, gamingConsolesData ]
const tabs= ["Mobiles","Laptops", "TV", "Tablets", "Smart Watches", "Headphones", "Cameras", "Gamming Consoles","Smart Bands" ]

const WishList = () => {
    const navigate = useNavigate();
    const [wishList, setWishList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedCompareData, setSelectedCompareData] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);


    useEffect(() => {
      const token = localStorage.getItem('token');
      
      let wishListData = localStorage.getItem('wishList');
      wishListData = JSON.parse(wishListData) || [];
      console.log("wishListData",wishListData)
      wishListData= wishListData.sort((a, b) => a.cat - b.cat);
      setWishList(wishListData);
      console.log("Now here it is",wishListData);

      if (!token) {
        navigate("/login");
      } 
    },[]);

    const showModalHandle= (item)=>{
        console.log("selected",item);

        setSelectedItem(item);
        setOpenModal(true);
        let  selectedCompare=[];
        item.items.map((itemId,ind)=>{
            const product = options[item.cat].find(option => option.id === itemId);
            selectedCompare.push(product);
        })
        setSelectedCompareData(selectedCompare);
        console.log("calcu",selectedCompare);
    }

    const onDelete = ()=>{
        setOpenModal(false);
        console.log("this to be delete",selectedItem);
        let newWishList = wishList.filter(obj => {
            return JSON.stringify(obj) !== JSON.stringify(selectedItem);
        });
        setWishList(newWishList);
        localStorage.setItem('wishList', JSON.stringify(newWishList));
    }
  return (
    <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Wishlist</h1>
                {wishList.map((item, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{tabs[item.cat]}</h2>
                    <div className="flex flex-wrap p-4 shadow-lg w-fit mt-4 hover:scale-105 cursor-pointer" onClick={()=>showModalHandle(item)}>
                    {item.items.map((itemId, idx) => {
                        const product = options[item.cat].find(option => option.id === itemId);
                        return (
                        <React.Fragment key={idx}>
                            <div className="flex flex-col items-center">
                            <img src={product.imageUrl} alt={product.model} className="h-32  rounded-lg" />
                            <p className="mt-2 text-sm">{product.model}</p>
                            </div>
                            
                            {idx < item.items.length - 1 && (
                            <img src={vs} alt="Versus" className="w-12 h-12 mt-10 mx-4" />
                            )}
                        </React.Fragment>
                        );
                    })}
                    </div>
                    {index < wishList.length - 1 && <hr className="my-8 border-t border-gray-300" />}
                </div>
                ))}
            </div>
        <Footer/>

         <Dialog
            open={openModal}
            size={"xl"}
            handler={()=>setOpenModal(false)}
            className="mb-2"
        >
            <DialogHeader>Your Favourite Comparisons</DialogHeader>
            <DialogBody className="h-[30rem] overflow-scroll">
                <CompareGeneric CompareData={selectedCompareData}/>
            </DialogBody>
            <DialogFooter className="space-x-2">
            <Button
                variant="text"
                color="red"
                onClick={onDelete}
                className="mr-1"
            >
                <span>Delete</span>
            </Button>
            <Button
                variant="gradient"
                color="green"
                onClick={()=>setOpenModal(false)}
            >
                <span>Close</span>
            </Button>
            </DialogFooter>
        </Dialog>
    </>
  )
}

export default WishList
