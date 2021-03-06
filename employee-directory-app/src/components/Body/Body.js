import API from "../../utilities/API";
import useDebounce from "../../utilities/Debounce";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Row from "../Row/Row";
import CardBody from "../CardBody/CardBody";
import Card from "../Card/Card";
import "./Body.css";

function Body() {
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState("");
  const [buttonText, setButtonText] = useState("Alphabetize");

  function loadUsers() {
    API.getUsers()
      .then((res) => {
        console.log(res);
        console.log(res.data.results);
        setUsers(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  const debouncedInput = useDebounce(searchedUser, 300);

  useEffect(() => {
    if (debouncedInput) {
      console.log(debouncedInput);
      console.log("hello response from api");
      filterAPI();
    } else {
      loadUsers();
    }
  }, [debouncedInput, searchedUser]);

  function filterAPI() {
    console.log("call worked");
    API.getUsers().then((res) => {
      const response = res.data.results;
      const employee = response.filter((users) => {
        const first = users.name.first.toLocaleLowerCase();
        console.log("searchedUser:", searchedUser);
        const last = users.name.last.toLocaleLowerCase();
        const lowerCaseSearchedUser = searchedUser.toLocaleLowerCase();
        const full = `${first} ${last}`;
        const fullOriginal = `${users.name.first} ${users.name.last}`;
        //'includes' method compares any piece of name to string (from object) so that if user only knows a part of the employee's name the api will still be called
        //compares input to object whether the user types in all lower case or capitalizes the first letter
        if (full.includes(lowerCaseSearchedUser)) {
          return true;
        } else if (fullOriginal.includes(searchedUser)) {
          return true;
        }
      });
      setUsers(employee);
    }, []);
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchedUser(value);
  };

  const changeButtonText = (e) => {
    e.preventDefault();

    if (buttonText === "Alphabetize") {
      setButtonText("Reset");
      const sortUsers = users.sort((a, b) =>
        a.name.first.compare(b.name.first)
      );
      setUsers(sortUsers);
    } else if (buttonText === "Reset") {
      setButtonText("Alphabetize");
    }
  };

  function splitDob(str) {
    return str.slice(0, 10);
  }

  return (
    <div class="body">
      <div class="left">
        <Header />
        <Search
          class="title justify-content-center"
          handleInputChange={handleInputChange}
          value={searchedUser}
        />
        <Button
          class="button btn btn-outline-secondary"
          changeButtonText={changeButtonText}
          text={buttonText}
        />
      </div>
      <div class="right">
        <Row>
          <Card>
            {users.map((user) => (
              <CardBody
                key={user.name.last}
                picture={user.picture.thumbnail}
                name={`${user.name.first} ${user.name.last}`}
                phone={user.phone}
                email={user.email}
                dob={splitDob(user.dob.date)}
              />
            ))}
          </Card>
        </Row>
      </div>
    </div>
  );
}

export default Body;
