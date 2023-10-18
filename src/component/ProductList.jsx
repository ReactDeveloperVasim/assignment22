import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import axios from "axios";

export const ProductList=()=>{
    const[data,setData]=useState([]);

    const getData = async()=>{
        const result = await axios.get("https://fakestoreapi.com/products");
        setData(result.data);
    };

    useEffect(()=>{
           getData(); 
    },[])

    return(
        <Grid container spacing={0} align="center">
            {
                data.map((item)=>
                    <ProductItem item={item}/>
                )
            }
        </Grid>
    );
}