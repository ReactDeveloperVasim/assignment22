import { Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState , useEffect } from "react";
import { CategoriesItem } from "./CategoriesItem";

export const CategoriesList=()=>{
    const[data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products/categories");
        setData(result.data);
    };

    useEffect(()=>{
            getData();
    },[])

    return(
        <Grid container spacing={2}>
            {
                data.map((item)=>
                       <CategoriesItem item={item} /> 
                )
            }
            <TextField variant="outlined" label="Search Here" fullWidth sx={{width:"1475px", marginLeft:"40px", border:"2px solid blue", fontSize:"30px"}} />
        </Grid>
    );
}