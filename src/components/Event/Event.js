import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Event.css";



const Event = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, Extra } = props.event;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/events/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/events"));
  };

  return (
    <div className="card" >
      
      
      <article> {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Kshs. {price}/=</h3>
      <p>{Extra} </p>
      <Button LinkComponent={Link} to={`/events/${_id}`} sx={{ mt: "auto" }} variant="outlined">
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }} variant="contained" >
        Delete
      </Button>
    </div>
  );
};

export default Event;