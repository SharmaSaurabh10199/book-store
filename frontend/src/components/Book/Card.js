import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { LinkComponent } from "@mui/material";
import axios from "axios";

export default function MediaCard(props) {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  // delete the book
  const deleteHandler = async (e) => {
    await axios
      .delete(`http://localhost:8800/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };
  return (
    <Card sx={{ maxWidth: 500, margin: "30px" }}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          By: {author}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          genere:{description}
        </Typography>
        <Typography gutterBottom variant="h4" component="div" marginTop="8px">
          Rs: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button LinkComponent={Link} to={`/books/${_id}`} size="small">
          Update
        </Button>
        <Button color="error" onClick={deleteHandler} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
