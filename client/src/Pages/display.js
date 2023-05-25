import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import cover from "../assets/cricket.png"
import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Comment from "../component/comment.js";


const Display = () => {
  const {id} = useParams()
  const [details, setDetails] = useState({});

  useEffect(() => {
    
    async function fetchData() {
      const response = await axios.get(`http://localhost:4100/enter/geteach/${id}`, {
        withCredentials: true,
      });
      
      setDetails(response.data);
    }
    fetchData();
  }, [id]);
    
  return (
    <div >
      {Object.keys(details).length > 0 ? (
        <div key={id}>
          <Card sx={{ maxWidth: '100%',maxHeight:'100%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cover}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div dangerouslySetInnerHTML={{ __html: details.title }}></div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div dangerouslySetInnerHTML={{ __html: details.content }}></div>
        </Typography>
      </CardContent>
    </Card>
      
          </div>   ) : (
                  <div>
                    <p>Loading...</p>
                  </div>
                )}
        
    <Comment/>
      </div>
    
  );
  
}
export default Display
