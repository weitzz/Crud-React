import React, { Component } from 'react';
import {Nav,Title,Table,Thead,Tr,Th,Td,Link,LinkD,Tbody,TrB} from './listElements'

import axios from 'axios';

const Exercise = props => (
 
  <TrB>
    <Td>{props.exercise.username}</Td>
    <Td>{props.exercise.description}</Td>
    <Td>{props.exercise.duration}</Td>
    <Td>{props.exercise.date.substring(0,10)}</Td>
    <Td>
    <Link to={"/edit/"+props.exercise._id}>Editar</Link> | <LinkD  onClick={() => { props.deleteExercise(props.exercise._id) }}>Excluir</LinkD>
    </Td>
  </TrB>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
  


  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <Nav>
        <Title>Lista de Exercícios</Title>
        <Table>
          <Thead>
            <Tr>
              <Th>Exercícios</Th>
              <Th>Descrição</Th>
              <Th>Duração</Th>
              <Th>Data</Th>
              <Th>Ação</Th>
            </Tr>
          </Thead>
          <Tbody>
            { this.exerciseList() }
          </Tbody>
        </Table>
      </Nav>
    )
  }
}