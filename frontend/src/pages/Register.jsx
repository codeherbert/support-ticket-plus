import {useState} from 'react';
import {FaUser} from 'react-icons/fa';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;
    
    const onChange = (e) => {
        setFormData = ((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (         
        <>
            <section className="heading">
                <h1>
                    <FaUser />Register                    
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form>
                    <div className="form-group">
                        <input className="form-control"
                            type="text" 
                            id="name" 
                            name="name"
                            value={name} 
                            onChange={onChange} 
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type="text" 
                            id="email" 
                            name="email"
                            value={email} 
                            onChange={onChange} 
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type="text" 
                            id="password" 
                            name="password"
                            value={password} 
                            onChange={onChange} 
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type="text" 
                            id="password2" 
                            name="password2"
                            value={password2} 
                            onChange={onChange} 
                            placeholder="Confirm password"
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register;