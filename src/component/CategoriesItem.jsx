import { Grid,Card , CardContent, Button } from "@mui/material";
import React from "react";

export const CategoriesItem=({item})=>{
    return(
        <Grid item xs={3}>
               <Card sx={{marginTop:"30px 10px"}}>
                    <CardContent>
                        <Button variant="contained" fullWidth>{item}</Button>
                    </CardContent>
               </Card> 
        </Grid>
    );
}