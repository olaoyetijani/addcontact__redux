import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const Editcontact = () => {
    const {id} = useParams()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('')

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
      if(currentContact) {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);
      }
    }, [currentContact])


    const handleSubmit = (e) => {
      e.preventDefault();

      const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);
      const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number) && parseInt(number));

      if(!email || !number || !name) return toast.warning("Please fill in all fields")
      if(checkEmail) return toast.error("This email already Exists!");
      if(checkNumber) return toast.error("This number already Exists!")

      const data = {
          id: parseInt(id),
          name,
          email,
          number,
      };
      
      dispatch({type: "UPDATE_CONTACT", payload: data});
      toast.success("Student Updated Succesfully!!");
      navigate('/');

  }


  return (
    <div className="container">
        {
            currentContact ? 
            (<>
                <h1 className="display-3 my-5 text-center">Edit Student {id}</h1>
                <div className="row">
                  <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group m-4">
                        <input type="text" placeholder="Name" className="form-control"
                        value={name} onChange={e=> setName(e.target.value)} />
                      </div>
                      <div className="form-group m-4">
                        <input type="email" placeholder="Email" className="form-control"
                        value={email} onChange={e=> setEmail(e.target.value)} />
                      </div>
                      <div className="form-group m-4">
                        <input type="number" placeholder="Phone Number" className="form-control" 
                        value={number} onChange={e=> setNumber(e.target.value)} />
                      </div>
                      <div className="form-group m-2">
                        <input type="submit" value="Update Student" className="btn btn-dark mx-3" />
                        <Link to='/' className="btn btn-danger mx-3">Cancel</Link>
                      </div>
                    </form>
                  </div>
                </div>
            </>) : (
              <h1 className="display-3 my-5 text-center">Student contact with id {id} does not exist</h1>
            )
        }
    </div>
  )
}

export default Editcontact