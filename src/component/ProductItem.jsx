import { Grid , Card , CardContent, Rating } from "@mui/material";
import React from "react";

export const ProductItem=({item})=>{
    return(
        <React.Fragment>
           
            <Grid item xs={3}>
                <Card sx={{bgcolor:"lightgray", border:"3px solid black",  borderRadius:"20px 0px",boxShadow:"2px 2px 2px 2px gray",margin:"20px", height:"470px"}}>
                    <CardContent>
                        <img src={item.image} alt="" height="150px" width="200px" />
                        <h5>RS. {item.price}</h5>
                        <h5>10% Discount</h5>
                        <Rating value={item.rating.rate}/>
                        <h4>{item.title.slice(0,40)}</h4>
                        <p>{item.description.slice(0,100)}</p>
                    </CardContent>
                </Card>
            </Grid>
            </React.Fragment>
       
    );
}