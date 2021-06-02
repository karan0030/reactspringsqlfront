import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";


export const getStudents=()=>{
    return axios.get(STUDENT_API_BASE_URL);
}

export const createStudent=(student)=>{
    return axios.post(STUDENT_API_BASE_URL, student);
}

export const getStudentById=(studentId)=>{
    return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
}

export const updateStudent=(student, studentId)=>{
    return axios.put(STUDENT_API_BASE_URL + '/' + studentId, student);
}

export const deleteStudent=(studentId)=>{
    return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
}