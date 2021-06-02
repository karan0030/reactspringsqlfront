import react ,{useEffect,useState} from 'react';
import {getStudents} from "../service/service"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'sname', label: 'Name', minWidth: 50 },
  { id: 'sFname', label: 'Father Name', minWidth: 50 },
  { id: 'sdob', label: 'DOB', minWidth: 50 },
  { id: 'semail', label: 'Email', minWidth: 50 },
  { id: 'saddress', label: 'Address', minWidth: 50 },
  { id: 'scity', label: 'City', minWidth: 50 },
  { id: 'sstate', label: 'State', minWidth: 50 },
  { id: 'smarks', label: 'Marks %', minWidth: 50 },
  { id: 'sclass', label: 'Class Opted', minWidth: 50 },
  { id: 'spin', label: 'Pin', minWidth: 50 },
  { id: 'sphone', label: 'Phone', minWidth: 50 }
  
  
];


const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingLeft:"2px",
    paddingTop:"4px",
    paddingRight:"2pX",
  },
  container: {
    maxHeight: 440,
  },
});

const StudentsPage=()=> {
  
    const [error,setError] =useState("");
    const [rows,setRow] =useState([]);
    
    const LoadStudents=()=>{
        getStudents().then(res=>{
         if(res.error){
            setError(res.error)
        }
        else{
           
            console.log(res.data);
            setRow(res.data)
        }
        })
       }
       
       useEffect(() => {
         LoadStudents();
       }, [])
  
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
                <TableCell align="left">
                  {row.student_name}
                </TableCell>
                <TableCell  align="left">
                  {row.father_name}
                </TableCell>
                <TableCell align="left">
                  {row.dob}
                </TableCell>
                <TableCell  align="left">
                  {row.email}
                </TableCell>
                <TableCell  align="left">
                  {row.address}
                </TableCell>
                <TableCell  align="left">
                  {row.city}
                </TableCell>
                <TableCell  align="left">
                  {row.state}
                </TableCell>
                <TableCell  align="left">
                  {row.marks}
                </TableCell>
                <TableCell  align="left">
                  {row.class_opt}
                </TableCell>
                <TableCell  align="left">
                  {row.pin}
                </TableCell>
                <TableCell  align="left">
                  {row.phone}
                </TableCell>
                </TableRow>
          ))}

          
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default StudentsPage;