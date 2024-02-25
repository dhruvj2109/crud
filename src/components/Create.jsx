import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../feature/UserDetailAction';
import axios from 'axios';

const Create = () => {

	const [users, setUsers] = useState({})
	const [userData, setUserData] = useState([])

    const dispatch  = useDispatch()

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
      
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(createUser({
			name: users.name,
			email: users.email,
			age: users.age,
			gender: users.gender
		}))
		// getUserDetails()
	}
	
	useEffect(() => {
		getUserDetails()
	}, [])

	const getUserDetails = async () => {
		const response = await axios.get("https://65d448e73f1ab8c63434cb18.mockapi.io/crud")
		setUserData(response.data)
		
	}

	return (
		<div>
			{userData?.map(item => (
				<div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}><p>{item?.name}</p><p>{item?.age}</p><p>{item?.gender }</p></div>
			))}
			<form className="w-50 mx-auto my-56" onSubmit={handleSubmit}>
				<div class="mb-3">
					<label class="form-label">Name</label>
					<input type="text" class="form-control" name='name' onChange={getUserData}/>
				</div>
				<div class="mb-3">
					<label class="form-label">Email</label>
					<input class="form-control" type="email" name='email' onChange={getUserData}/>
				</div>
				<div class="mb-3">
					<label class="form-label">Age</label>
					<input type='number' class="form-control"  name='age' onChange={getUserData}/>
				</div>
				<div class="mb-3">
					<input class="form-check-input" type="radio" value="male" name='gender' onChange={getUserData} />
					<label class="form-check-label" >
						Male
					</label>
				</div>
				<div class="mb-3">
					<input class="form-check-input" type="radio" value="female" name='gender' onChange={getUserData}/>
					<label class="form-check-label" >
					Female
					</label>
				</div>
				<button type="submit" class="btn btn-primary">
					Approved
				</button>
			</form>

			
		</div>
	);
};

export default Create;
