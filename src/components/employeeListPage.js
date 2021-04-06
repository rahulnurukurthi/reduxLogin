import React,{useState,useEffect} from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {logout,selectUser} from "../loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    '& >thead>tr>th':{
      backgroundColor:'#000',
      color: "#FFF",
      fontSize:14
    },
    "& >tbody>tr":{
      '&:nth-of-type(odd)': {
        backgroundColor: "rgba(0, 0, 0, 0.04)"
      },
    }
  },
});

export default function EmployeeListPage() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const [tableStructure,setTableStructure] = useState([]);

// Setting json data to state on render
  useEffect(() => {
    let user =[
      {
        "id":1,"name":"test1","age" : "11","gender":"male","email" : "test1@gmail.com","phoneNo" : "9415346313"
      },
      {
        "id" : 2,"name":"test2","age" : "12","gender":"male","email" : "test2@gmail.com","phoneNo" : "9415346314"
      },
      {
        "id":3,"name":"test3","age" : "13","gender":"male","email" : "test3@gmail.com","phoneNo" : "9415346315"
      },
      {
        "id":4,"name":"test4","age" : "14","gender":"male","email" : "test4@gmail.com","phoneNo" : "9415346316"
      },
      {
      "id":5, "name":"test5","age" : "15","gender":"male","email" : "test5@gmail.com","phoneNo" : "9415346317"
      },
      {
      "id":6,"name":"test6","age" : "16","gender":"male","email" : "test6@gmail.com","phoneNo" : "9415346318"
      }
    ]
    setTableStructure(user);
  },[]);

// Logout function
  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <Box p={2}>
      <Box fontWeight="fontWeightBold" display="flex" justifyContent="flex-end" mb={2}>
        Welcome, {userName.userName}
        <Button
            variant="contained"
            color="secondary"
            className="form-input"
            style={{ marginLeft: "16px" }}
            size="small"
            onClick={handleLogout}
          >
            Logout
          </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableStructure.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phoneNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
